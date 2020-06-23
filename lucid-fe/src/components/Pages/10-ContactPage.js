import React from "react";
//, {useEffect} 
import {Button} from 'antd';

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

function ContactPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <section id="contact">
            <div class="grid-contact">
                <div class="flex-box s9-a-header" >
                    <h2>S9-A</h2>
                </div>
                <div class="grid-box s9-b-footer">
                    
                <div class="flex-box s9-c-header-2"> 
                    <h2>Contact Us S9-B</h2>
                    <Button type="primary">Pay</Button>
                </div>

                    <div class="grid-box2">
                            <div class="s9-d-info">
                                <p>Lucid Consulting, L.L.C.</p>
                                <p>500 Westover Dr. Unit#14157,</p>
                                <p>Sanford, NC 27330</p>
                                </div>
                            <div class="s9-d-info">
                                <p>828.222.0895</p>
                                <p>admin@consulting-lucid.com</p>
                            </div>
                            <div class="s9-d-info">
                                <p>Jobs</p>
                                <p>Volunteers</p>
                                <p>NGOs</p>
                            </div>
                            <div class="s9-d-info">
                                <p>Quotes</p>
                                <p>Technologies</p>
                                <p>Staffing</p>
                                </div>
                    </div>
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

export default connect(state => state, mapDispatchToProps)(ContactPage);