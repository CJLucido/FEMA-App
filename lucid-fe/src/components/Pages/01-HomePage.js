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

function HomePage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>

            <section id="home">
                <div class="grid-home">
                    <div class="flex-box s1-a-title">
                    <h2>S1-A</h2>
                    </div>   
                    <div class="grid-box s1-b-links">
                    <h2>S1-B</h2>
                    </div>
                    <div class="flex-box s1-c-grants-link">
                    <h2>S1-C</h2>
                    </div>
                    <div class="flex-box s1-d-side-links">
                    <h2>S1-D</h2>
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