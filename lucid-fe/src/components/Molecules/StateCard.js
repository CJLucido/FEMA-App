import React from 'react';
import {Card} from 'antd';

import {Link} from "react-router-dom";

import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    changeDR
} from "../../actions";

function StateCard(props) {
 
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

    const handleDRNumber = (data) => {
     
      props.changeDR(data)
      console.log("new DR", data)
  }

  return (
    <Card style={{padding:"0 0 0 0", margin:"1em",backgroundColor:"#000000", borderRadius:"10px", boxShadow:"0px 4px 4px rgba(0,0,0,0.25)", maxWidth: "85vw"}}>
    <Card class="cardText" style={{padding:"0 0 0 0", backgroundColor:"gray", borderRadius:"00px"}} title={props.disasterType + " " + props.disasterNumber + " " + props.titleDR}>
        <Card.Grid class="cardText" style={gridStyle1}>
        Began: {props.beganDate ? props.beganDate.slice(0,10) : props.beganDate}
        </Card.Grid>
        <Card.Grid style={gridStyle1}>
        Closed: {props.closeDate ? props.closeDate.slice(0,10) : props.closeDate}
        </Card.Grid>
        <Card.Grid style={gridStyle2} onClick={() => handleDRNumber(props.disasterNumber)}>
          {props.paProgramDeclared ? <Link to="/categorial" >"PA Support"</Link> : "No PA Support"}
          
          </Card.Grid>
        <Card.Grid style={gridStyle2}>{props.iaProgramDeclared ? "IA Support" : "No IA Support"}</Card.Grid>
        <Card.Grid style={gridStyle2}>{props.hmProgramDeclared ? "HM Support" : "No HM Support"}</Card.Grid>

  
  {/* <Card.Grid style={gridStyle2}>{props.stateName}</Card.Grid> */}
        
    </Card>
    </Card>
  );
}


const mapDispatchToProps ={

  changeDR
}

export default connect(state => state, mapDispatchToProps)(StateCard);