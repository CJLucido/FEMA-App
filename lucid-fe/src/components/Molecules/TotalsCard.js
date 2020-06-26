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

    const gridStyle1 = {
        width: '50%',
        textAlign: 'flex-start',
        wordWrap:"break-word"
    }

    const gridStyle2 = {
        width: '33.33333333%',
        textAlign: 'flex-start',
        wordWrap:"break-word"
    }

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