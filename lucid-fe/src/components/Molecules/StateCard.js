import React from 'react';
import {Card} from 'antd';

export default function StateCard(props) {
 
    const gridStyle = {
        width: '33%',
        textAlign: 'center',
    }

  return (
    <Card style={{margin:"2em", backgroundColor:"gray", fontSize:".5em"}} title={props.stateName}>
        <Card.Grid style={gridStyle}>
        {props.stateName}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        {props.titleDR}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        {props.disasterType + " " + props.disasterNumber}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        Began: {props.beganDate}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        Closed: {props.closeDate}
        </Card.Grid>
        <Card.Grid style={gridStyle}>{props.paProgramDeclared ? "PA Support" : "No PA Support"}</Card.Grid>
        <Card.Grid style={gridStyle}>{props.iaProgramDeclared ? "IA Support" : "No IA Support"}</Card.Grid>
        <Card.Grid style={gridStyle}>{props.hmProgramDeclared ? "HM Support" : "No HM Support"}</Card.Grid>

   
    </Card>
  );
}