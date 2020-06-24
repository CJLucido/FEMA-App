import React from "react";
//, {useEffect}
import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS

//imgs
import getStarted from "../../imgs/getStartedButton.svg"

//PAGES
import {Link} from "react-router-dom";

//THIS FUNCTIONAL COMPONENT

function HomePage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>

            <section id="home">
                <div class="grid-home">
                    <div class="flex-box1 s1-a-title">
                    <h2>Welcome to the DR history app!</h2>
                    </div>   
                    <div class="grid-box s1-b-text">
                        <div class="flex-box2 leftAlign1">
                            <p>This app presents public information provided by several of FEMA’s APIs in a palatable format.</p>
                        </div>
                        <div class=" flex-box3 rightAlign1">
                            <p>We currently support Disaster Declaration Summaries and Public Assistance Funded Project Details.</p>
                        </div>
                        <div class="flex-box2 leftAlign2">
                            <p>For any feedback please contact the developer through https://cjlucido.netlify.app</p>
                        </div>
                        <div class=" flex-box3 rightAlign2">
                            <Link to="/states">
                            <img src={getStarted} alt="box whose corners don't meet surround text to make a button"/>
                            </Link>
                        </div>
                    </div>
                    {/* <div class="s1-e-mobile-links">
                        <a>Mission</a>
                        <a>Team</a>
                        <a>Articles</a>
                        <a>News</a>
                        <a>Contact Us</a>
                        <a>Apps</a>
                        <a>Maps</a>

                    </div> */}
                </div>
                </section>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure
}

export default connect(state => state, mapDispatchToProps)(HomePage);

//for more see supportify