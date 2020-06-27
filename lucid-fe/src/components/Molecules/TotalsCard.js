import React from 'react';
//, {useEffect} 
import {Card, Collapse} from 'antd';

import {connect} from "react-redux";

function TotalsCard(props) {
 
    // useEffect(()=>{
    //     function findTotalFederal(){

    //     }

    //     findTotalFederal(props.totalFederal, props.totalObligated)
    // }, [props.totalObligated, props.totalFederal])



    //fontsize for smaller cardtext on home.less file

    const {Panel} = Collapse;


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
                    </div>
  )};
                    
const mapDispatchToProps ={

  
  }
  
  export default connect(state => state, mapDispatchToProps)(TotalsCard);