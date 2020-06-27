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
    changeEnd,
    changeCat
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS
//STYLE CLASSES COME FROM YEAR AND CATEGORY LESS FILES

//Molecules
import TotalsCard from "../Molecules/TotalsCard";

//Organisms
import PWList from "../Organisms/PWList";

//PAGES
import {Link} from "react-router-dom";

//imgs

//import yearMessage from "../../imgs/yearMessageBox.svg";
import stateReturnButton from "../../imgs/stateReturnButton.svg";
import catReturnButton from "../../imgs/catReturnButton.svg";


//THIS FUNCTIONAL COMPONENT

function PWPage(props){
    // const [currentProvince, setProvince] = useState("")


//     useEffect(() => {
//         props.changeProvince(" ")
//         console.log(props.currentProvince)
// }, [props.currentProvince]);



    const handleStateRefresh = (event) => {
        props.changeProvince("");
        console.log(props.currentProvince)
        
    }

    const handleCategoryRefresh = (event) => {
        props.changeCat("");
       
        
    }


console.log(props.statesAvailableDRs)

    return(
        <div>
            <section id="years">
                <div class="grid-years">
                    <div class="fixed">
                    <div class="grid-years">
                    <div class="flex-box-year s3-a-title">
                     <h1>{props.currentProvince} PA Finder</h1>
                    </div>
                    <div class="year-instructions-box">
                    <h2>Category {props.category}</h2>
                    <h2>_______________</h2>
                    <h2>DR {props.drNumber}</h2>

                    </div>   
                    {/* <div  class="year-instructions-box">
                        <img src={yearMessage} alt="box with unclosed corners giving direction to choose a state from the list"/>
                    </div> */}

                    <div class="flex-box-year s3-b-backlink">
                    <Link to="/states">
                     <img onClick={handleStateRefresh} src={stateReturnButton} alt="box with unclosed corners giving direction to choose a state from the list"/>
                     </Link>
                    </div>   

                    <div class="flex-box-year s4-d-backlink2">
                    <Link to="/categorial">
                     <img onClick={handleCategoryRefresh} src={catReturnButton} alt="box with unclosed corners giving direction to choose a category from the list"/>
                     </Link>                    </div>   

                        <TotalsCard/>

                    </div>
                    </div>

                        <div class="s3-c-years-text">
                        <PWList/>
               {props.statesAvailableDRs.length > 0 ? <p >We're sorry, for the state of {props.currentProvince} the government has only provided PW information for the following Disasters(DR) or Emergencies(EM): {props.statesAvailableDRs.join(", ")}. This site will update automatically as they publish information.</p> : <p></p>}
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
    changeEnd,
    changeCat
}

export default connect(state => state, mapDispatchToProps)(PWPage);



// const mapDispatchToProps ={
//     somefunction,
//     someFailure
// }

// export default connect(state => state, mapDispatchToProps)(FieldworkPage);