import React, {useRef, useEffect} from 'react';
import * as d3 from "d3";

import {connect} from "react-redux";

import {Link} from "react-router-dom";

import {Alert} from 'antd';

//ACTION FUNCTIONS
import{
    changeDR
} from "../../actions";

//imgs

import pwReturnButton from "../../imgs/pwReturnButton.svg";

function TreeMap(props) {
 
    const ref = useRef();

    useEffect(() => {
     //JSON.stringify(props.funding)
    function draw(){
        let width = ref.current.clientWidth;
        let height = ref.current.clientHeight;

        const svg = d3.select(ref.current)
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .style("border", "1px solid white")
      //  const valid =JSON.stringify(props.funding)
         d3.json(`https://www.fema.gov/api/open/v1/PublicAssistanceFundedProjectsDetails?$filter=startswith(stateCode,'${props.currentProvince}') and disasterNumber eq ${props.drNumber} and dcc eq '${props.category}'`)

        .then(res => {
            //console.log("res", res.PublicAssistanceFundedProjectsDetails)
            const data3 = res.PublicAssistanceFundedProjectsDetails
            //console.log("data3", data3)
        
    const fundingArr = data3.map(item => {
                return {"PW":`${item.pwNumber}`, "value" : `${item.federalShareObligated}`}
                });

        const data4 = `{"children":` + JSON.stringify(fundingArr) + "}"
  
       // console.log("data4", data4)

        const data5 = JSON.parse(data4)
        var root = d3.hierarchy(data5).sum(function(d){
            //console.log('d', d.value)
            return d.value})

    //console.log("root", root)



        d3.treemap()
            .size([width, height])
            .padding(2)
            (root)

        const tooltip = d3.select('body')
                         .data(root.leaves())
                        .enter()
                        .append('div')
                        .style("position", "fixed")
                        .style("z-index", "10")
                        .style("top", "0")
                        .style("left", "0")
                        .style("visibility", "hidden")
                        .style('background', "#fff")
                        .style("font-size", "5vw")
                        .text(function(d){ 
                           // console.log("PW", d.data)
                        return "PW:" + d.data.PW})
                        // .text(function(d){ 
                        // return "Federal:" + d.data.value + "/" + props.totalFederal});
    


        svg
            .selectAll("rect")
            .data(root.leaves())
            .enter()
            .append("rect")
            .attr('x', function (d) { return d.x0; })
            .attr('y', function (d) { return d.y0; })
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .style("stroke", "white")
            .style("fill", "black")
            .on('mouseover', function(d){
                console.log("tooltip",d)
                tooltip.text("PW:" + d.data.PW); return tooltip.style("visibility", "visible")//("fontSize", "3vw")
            })
            .on("mouseout", function(){return tooltip.style("visibility","hidden")})
            .on('click', function(d){
                return tooltip.style("visibility","visible")})            
            .on('dblclick', function(d){
                    return tooltip.style("visibility","hidden")})   
  


        // and to add the text labels
//         svg
//           .selectAll("text")
//           .data(root.leaves())
//           .enter()
//           .append("text")
//             .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
//             .attr("y", function(d){ return d.y0+17})    // +20 to adjust position (lower)
//             .text(function(d){ 
//                 console.log("PW", d.data)
//             return "PW:" + d.data.PW
//  })
//             .attr("font-size", ".75vw")
//             .attr("fill", "red")


            return root
        })

    }

    draw();

    }, [ props.category, props.currentProvince, props.drNumber])

  return (
        <div id="parentDiv" style={{width:"300vw", height:"300vh"}}>
            <div class="pwReturn">
                <Link to="/projectworksheets">
                <img src={pwReturnButton} alt="box with unclosed corners giving direction to return to previous page"/>
                </Link>
            </div>
           <Alert message="Zoom out suggested" type="info" showIcon closable style={{zIndex:"2000", position: "fixed", maxWidth:"20%", marginLeft: "0%", marginTop: "1%"}}/>
           <Alert message="Double Click to unselect PW" type="info" showIcon closable style={{zIndex:"2000", position: "fixed", maxWidth:"20%", marginLeft: "0%", marginTop: "5%"}}/>
            <svg ref={ref} style={{width:"300vw", height:"300vh"}}>

            </svg>


        </div>
  );
}


const mapDispatchToProps ={

  changeDR
}

export default connect(state => state, mapDispatchToProps)(TreeMap);