import React, {useEffect}  from 'react';
//, {useEffect} 
import {Card, Collapse} from 'antd';

import {connect} from "react-redux";

import {Link} from "react-router-dom";

//import TreeMap from "../Atoms/Treemap";

import{
    fundingHandle
} from "../../actions";

function TotalsCard(props) {
 
    // useEffect(()=>{
    //     function findTotalFederal(){

    //     }

    //     findTotalFederal(props.totalFederal, props.totalObligated)
    // }, [props.totalObligated, props.totalFederal])



    //fontsize for smaller cardtext on home.less file

    const {Panel} = Collapse;

    const fundingHandle = props.fundingHandle;

    useEffect(() => {
        fundingHandle(props.currentProvince, props.drNumber, props.category)
}, [props.currentProvince, props.drNumber, props.category]); // eslint-disable-line react-hooks/exhaustive-deps

   
  return (

                    <div class="year-selector">
                        <Collapse accordion>
                            <Panel header="Totals" key="1">
                                <Card class="cardText" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} >
                                    Total Obligated: {props.totalObligated}
                                </Card>

                                <Card class="cardText" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} >
                                    Total Federal Share Obligated: {props.totalFederal}
                                </Card>
                            </Panel>
                           

                            
                        </Collapse>
                        <Link to="/treemap">
                                    PW Map (per Federal Share)
                                </Link>
                    </div>
  )};
                    
const mapDispatchToProps ={
    fundingHandle
  
  }
  
  export default connect(state => state, mapDispatchToProps)(TotalsCard);