import React from 'react';
import {Card} from 'antd';

import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    changeDR
} from "../../actions";

function PWCard(props) {
 
    const gridStyle1 = {
        width: '50%',
        textAlign: 'center',
        wordWrap:"break-word",
       height: '100%'
    }

    const gridStyle2 = {
        width: '33.33333333%',
        textAlign: 'center',
        wordWrap:"break-word",
       height: '100%'
    }

    //fontsize for smaller cardtext on home.less file

  return (
    <Card style={{padding:"0 0 0 0", margin:"1em",backgroundColor:"#000000", borderRadius:"10px", boxShadow:"0px 4px 4px rgba(0,0,0,0.25)", maxWidth: "95vw"}}>
    <Card class="cardText2" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} title={"Obligated: " + props.obligatedDate.slice(0,10)}>
        <Card.Grid class="cardText" style={gridStyle1}>
        PW: {props.pwNumber}<br/>
        {props.stateCode}
        </Card.Grid>
        <Card.Grid style={gridStyle1}>
        County: {props.county} <br/> Applicant:<br/>{props.applicantId}
        </Card.Grid>
        <Card.Grid style={gridStyle2} >
          Project<br/>Amount: <br/>{props.projectAmount}
          
          </Card.Grid>
        <Card.Grid style={gridStyle2}>Federal<br/>Share<br/> Obligated: <br/>{props.federalShareObligated}</Card.Grid>
        <Card.Grid style={gridStyle2}>Total<br/>Obligated: <br/>{props.totalObligatedPW}</Card.Grid>

  
  {/* <Card.Grid style={gridStyle2}>{props.stateName}</Card.Grid> */}
        
    </Card>
    </Card>
  );
}


const mapDispatchToProps ={

  changeDR
}

export default connect(state => state, mapDispatchToProps)(PWCard);