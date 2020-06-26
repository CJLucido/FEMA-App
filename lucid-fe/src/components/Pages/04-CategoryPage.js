import React from "react";
//, {useEffect}
import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure,
    searchHandle,
    changeProvince,
    changeCat
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS


//PAGES
import {Link} from "react-router-dom";

//imgs

import catMessage from "../../imgs/catMessageBox.svg";
import stateReturnButton from "../../imgs/stateReturnButton.svg";
import yearReturnButton from "../../imgs/yearReturnButton.svg";

import aButton from "../../imgs/aButton.svg";
import bButton from "../../imgs/bButton.svg";
import cButton from "../../imgs/cButton.svg";
import dButton from "../../imgs/dButton.svg";
import eButton from "../../imgs/eButton.svg";
import fButton from "../../imgs/fButton.svg";
import gButton from "../../imgs/gButton.svg";

// const { RangePicker } = DatePicker;

//THIS FUNCTIONAL COMPONENT

function CategoryPage(props){
    // const [currentProvince, setProvince] = useState("")


//     useEffect(() => {
//         props.changeProvince(" ")
//         console.log(props.currentProvince)
// }, [props.currentProvince]);

const handleCatChange = (event) => {
    props.changeCat(event.currentTarget.id)
    console.log("wowzers")
}


const handleStateRefresh = (event) => {
    props.changeProvince("");
    console.log(props.currentProvince)
    
}
    return(
        <div>
            <section id="categories">
                <div class="grid-categories">
                    <div class="s3-a-title flex-box-categories ">
                     <h1>{props.currentProvince} PA Finder</h1>
                    </div>   
                    <div  class="categories-instructions-box">
                        <img src={catMessage} alt="box with unclosed corners giving direction to choose a state from the list"/>
                    </div>

                    <div class="flex-box-categories s4-b-backlink">
                    <Link to="/states">
                     <img onClick={handleStateRefresh} src={stateReturnButton} alt="box with unclosed corners giving direction to choose a state from a previous page"/>
                     </Link>
                    </div>   

                    <div class="flex-box-categories s4-d-backlink2">
                    <Link to="/statesold">
                     <img src={yearReturnButton} alt="box with unclosed corners giving direction to choose a year from previous page"/>
                     </Link>
                     </div>   

                     <div class="cat-a" id="A" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={aButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>

                    <div class="cat-b" id="B" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={bButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>
                    <div class="cat-c" id="C" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={cButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>
                    <div class="cat-d" id="D" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={dButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>
                    <div class="cat-e" id="E" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={eButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>
                    <div class="cat-f" id="F" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={fButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>
                    <div class="cat-g" id="G" onClick={handleCatChange} >
                    <Link to="/projectworksheets"  >
                        <img  src={gButton} alt="circle surrounding category abbreviation" />
                    </Link>
                    </div>

                    <div class="cat-descriptions flex-box-categories">
                        <p>
                        A - Debris Removal <br/>
B - Emergency Protective Measures<br/>
C - Roads and Bridges<br/>
D - Water Control Facilities<br/>
E - Public Buildings and Contents<br/>
F - Public Utilities<br/>
G - Parks, Recreational, and Other Facilities<br/>
                        </p>
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
    changeCat
}

export default connect(state => state, mapDispatchToProps)(CategoryPage);