import React from "react";
//, {useEffect}
import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure,
    searchHandle,
    changeProvince,
    changeStart,
    changeEnd
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS

import {DatePicker} from 'antd';

//Organisms
import StateList from "../Organisms/StateList";

//PAGES
import {Link} from "react-router-dom";

//imgs

import yearMessage from "../../imgs/yearMessageBox.svg";
import stateReturnButton from "../../imgs/stateReturnButton.svg";

// const { RangePicker } = DatePicker;

//THIS FUNCTIONAL COMPONENT

function YearPage(props){
    // const [currentProvince, setProvince] = useState("")


//     useEffect(() => {
//         props.changeProvince(" ")
//         console.log(props.currentProvince)
// }, [props.currentProvince]);



async function changeYearRange(dateString){
        console.log("start", dateString)
        //console.log('end', dateString[1])
        props.changeStart(dateString)
        //props.changeEnd(dateString[1])
}

    const handleYearChange = (value, dateString) => {
        changeYearRange(dateString)
        
    }

    const handleStateRefresh = (event) => {
        props.changeProvince("");
        console.log(props.currentProvince)
        
    }


    return(
        <div>
            <section id="years">
                <div class="grid-years">
                    <div class="fixed">
                    <div class="grid-years">
                    <div class="flex-box-year s3-a-title">
                     <h1>{props.currentProvince} DR Finder</h1>
                    </div>   
                    <div  class="year-instructions-box">
                        <img src={yearMessage} alt="box with unclosed corners giving direction to choose a state from the list"/>
                    </div>

                    <div class="flex-box-year s3-b-backlink">
                    <Link to="/states">
                     <img onClick={handleStateRefresh} src={stateReturnButton} alt="box with unclosed corners giving direction to choose a state from the list"/>
                     </Link>
                    </div>   

                    <div class="flex-box-year s3-d-instruction">
                     <p>When the DR appears, you can click on the  “Support” for more information.</p>
                    </div>   

                    <div class="year-selector">
                        <DatePicker picker="year" onChange={handleYearChange} placeholder="From year"/>
                    </div>
                    </div>
                    </div>

                        <div class="s3-c-years-text">
                        <StateList/>
                        </div>
                   </div>
            </section>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure,
    searchHandle,
    changeProvince,
    changeStart,
    changeEnd
}

export default connect(state => state, mapDispatchToProps)(YearPage);