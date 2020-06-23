import React from "react";
//, {useEffect}
import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS

//PAGES
//import {Route, Link} from "react-router-dom";

//THIS FUNCTIONAL COMPONENT

function MissionPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <section id="mission">
                
                <div class="grid-mission">
                    <div class="flex-box s2-a-title">
                    <h1>Your Future + Our Past <br/> Now.</h1>
                    </div>   
                    <div class="flex-box s2-b-images">
                    <h2>S1-B</h2>
                    </div>
                    <div class="flex-box s2-c-mission-text">
                    <h2>S1-C</h2>
                    </div>
                </div>
            </section>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure
}

export default connect(state => state, mapDispatchToProps)(MissionPage);