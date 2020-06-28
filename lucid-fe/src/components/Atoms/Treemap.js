import React, {useRef, useEffect} from 'react';
import * as d3 from "d3";

import {connect} from "react-redux";

import {Link} from "react-router-dom";

//ACTION FUNCTIONS
import{
    changeDR
} from "../../actions";

//imgs

import pwReturnButton from "../../imgs/pwReturnButton.svg";

function TreeMap(props) {
 
    const ref = useRef();

    //const parentDiv = document.getElementById("parentDiv");

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
  
        console.log("data4", data4)

        const data5 = JSON.parse(data4)
        var root = d3.hierarchy(data5).sum(function(d){
            //console.log('d', d.value)
            return d.value})

    console.log("root", root)



        d3.treemap()
            .size([width, height])
            .padding(2)
            (root)
    
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
      
        // and to add the text labels
        svg
          .selectAll("text")
          .data(root.leaves())
          .enter()
          .append("text")
            .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
            .attr("y", function(d){ return d.y0+17})    // +20 to adjust position (lower)
            .text(function(d){ 
                console.log("PW", d.data)
                return d.data.PW })
            .attr("font-size", ".75vw")
            .attr("fill", "red")


            return root
        })

    }

    useEffect(() => {
        draw();//JSON.stringify(props.funding)
    }, [props.funding])

  return (
        <div id="parentDiv" style={{width:"300vw", height:"300vh"}}>
            <div style={{position:"fixed", zIndex:"2000", marginLeft:"80%", marginTop:"5%"}}>
                <Link to="/projectworksheets">
                <img src={pwReturnButton} alt="box with unclosed corners giving direction to return to previous page"/>
                </Link>
            </div>
           
            <svg ref={ref} style={{width:"300vw", height:"300vh"}}>
            </svg>

        </div>
  );
}


const mapDispatchToProps ={

  changeDR
}

export default connect(state => state, mapDispatchToProps)(TreeMap);