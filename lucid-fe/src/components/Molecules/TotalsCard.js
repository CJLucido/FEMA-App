import React from 'react';
//, {useEffect} 
import {Card} from 'antd';

import {connect} from "react-redux";

function TotalsCard(props) {
 
    // useEffect(()=>{
    //     function findTotalFederal(){

    //     }

    //     findTotalFederal(props.totalFederal, props.totalObligated)
    // }, [props.totalObligated, props.totalFederal])



    //fontsize for smaller cardtext on home.less file

  return (

                    <div class="year-selector">
                    <Card class="cardText" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} >
                        Total Obligated: {props.totalObligated}
                    </Card>

                    <Card class="cardText" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} >
                        Total Federal Share Obligated: {props.totalFederal}
                    </Card>
                    </div>
  )};
                    
const mapDispatchToProps ={

  
  }
  
  export default connect(state => state, mapDispatchToProps)(TotalsCard);