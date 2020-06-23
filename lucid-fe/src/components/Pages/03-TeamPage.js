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

function TeamPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <section id="team">
                <div class="grid-team">
                    <div class="grid-box s3-a-team-links">
                    
                        <div class="flex-box s3-c-team-link">
                            <p>S1-A-Sub CEO</p>
                        </div>
                        <div class="flex-box s3-c-team-link">
                            <p>S1-A-Sub CFO</p>
                        </div>
                        <div class="flex-box s3-c-team-link">
                            <p>S1-A-Sub CTO</p>
                        </div>
                    </div>   
                    <div class="flex-box s3-b-team-statement">
                    <h2>S1-B</h2>
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

export default connect(state => state, mapDispatchToProps)(TeamPage);