import React from 'react';
import {Card} from 'antd';

export default function StateCard(props) {
 
    const gridStyle1 = {
        width: '50%',
        textAlign: 'center',
        wordWrap:"break-word"
    }

    const gridStyle2 = {
        width: '33.33333333%',
        textAlign: 'center',
        wordWrap:"break-word"
    }

    //fontsize for smaller cardtext on home.less file

  return (
    <Card style={{padding:"0 0 0 0", margin:"1em",backgroundColor:"#000025", borderRadius:"00px", boxShadow:"0px 4px 4px rgba(0,0,0,0.25)", maxWidth: "85vw"}}>
    <Card class="cardText" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} title={props.disasterType + " " + props.disasterNumber + " " + props.titleDR}>
        <Card.Grid style={gridStyle1}>
        Began: {props.beganDate ? props.beganDate.slice(0,10) : props.beganDate}
        </Card.Grid>
        <Card.Grid style={gridStyle1}>
        Closed: {props.closeDate ? props.closeDate.slice(0,10) : props.closeDate}
        </Card.Grid>
        <Card.Grid style={gridStyle2}>{props.paProgramDeclared ? "PA Support" : "No PA Support"}</Card.Grid>
        <Card.Grid style={gridStyle2}>{props.iaProgramDeclared ? "IA Support" : "No IA Support"}</Card.Grid>
        <Card.Grid style={gridStyle2}>{props.hmProgramDeclared ? "HM Support" : "No HM Support"}</Card.Grid>

  
  {/* <Card.Grid style={gridStyle2}>{props.stateName}</Card.Grid> */}
        
    </Card>
    </Card>
  );
}