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

//imgs
import stateMessage from "../../imgs/stateMessageBox.svg";
import alabamaButton from "../../imgs/alabamaButton.svg";
import alaskaButton from "../../imgs/alaskaButton.svg";
import arizonaButton from "../../imgs/arizonaButton.svg";
import arkansasButton from "../../imgs/arkansasButton.svg";
import californiaButton from "../../imgs/californiaButton.svg";
import coloradoButton from "../../imgs/coloradoButton.svg";
import connecticutButton from "../../imgs/connecticutButton.svg";
import delawareButton from "../../imgs/delawareButton.svg";
import districtofcolombiaButton from "../../imgs/districtofcolombiaButton.svg";
import floridaButton from "../../imgs/floridaButton.svg";
import georgiaButton from "../../imgs/georgiaButton.svg";
import hawaiiButton from "../../imgs/hawaiiButton.svg";
import idahoButton from "../../imgs/idahoButton.svg";
import illinoisButton from "../../imgs/illinoisButton.svg";
import indianaButton from "../../imgs/indianaButton.svg";
import iowaButton from "../../imgs/iowaButton.svg";
import kansasButton from "../../imgs/kansasButton.svg";
import kentuckyButton from "../../imgs/kentuckyButton.svg";
import louisianaButton from "../../imgs/louisianaButton.svg";
import maineButton from "../../imgs/maineButton.svg";
import marylandButton from "../../imgs/marylandButton.svg";
import massachusettsButton from "../../imgs/massachusettsButton.svg";
import michiganButton from "../../imgs/michiganButton.svg";
import minnesotaButton from "../../imgs/minnesotaButton.svg";
import mississippiButton from "../../imgs/mississippiButton.svg";
import missouriButton from "../../imgs/missouriButton.svg";
import montanaButton from "../../imgs/montanaButton.svg";
import nebraskaButton from "../../imgs/nebraskaButton.svg";
import nevadaButton from "../../imgs/nevadaButton.svg";
import newhampshireButton from "../../imgs/newhampshireButton.svg";
import newjerseyButton from "../../imgs/newjerseyButton.svg";
import newmexicoButton from "../../imgs/newmexicoButton.svg";
import newyorkButton from "../../imgs/newyorkButton.svg";
import northcarolinaButton from "../../imgs/northcarolinaButton.svg";
import northdakotaButton from "../../imgs/northdakotaButton.svg";
import ohioButton from "../../imgs/ohioButton.svg";
import oklahomaButton from "../../imgs/oklahomaButton.svg";
import oregonButton from "../../imgs/oregonButton.svg";
import pennsylvaniaButton from "../../imgs/pennsylvaniaButton.svg";
import puertoricoButton from "../../imgs/puertoricoButton.svg";
import rhodeislandButton from "../../imgs/rhodeislandButton.svg";
import southcarolinaButton from "../../imgs/southcarolinaButton.svg";
import southdakotaButton from "../../imgs/southdakotaButton.svg";
import tennesseeButton from "../../imgs/tennesseeButton.svg";
import texasButton from "../../imgs/texasButton.svg";
import utahButton from "../../imgs/utahButton.svg";
import vermontButton from "../../imgs/vermontButton.svg";
import virginiaButton from "../../imgs/virginiaButton.svg";
import washingtonButton from "../../imgs/washingtonButton.svg";
import westvirginiaButton from "../../imgs/westvirginiaButton.svg";
import wisconsonButton from "../../imgs/wisconsonButton.svg";
import wyomingButton from "../../imgs/wyomingButton.svg";

//THIS FUNCTIONAL COMPONENT

function StatesPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <section id="states">
                
                    <div class="flex-box s2-a-title">
                        <h1>DR Finder</h1>
                    </div>   
                    <div class="state-instructions-box">
                        <img src={stateMessage} alt="box with unclosed corners giving direction to choose a state from the list"/>
                    </div>
                    <div class="alabama">
                        <img src={alabamaButton}/>
                    </div>
                    <div class="alaska">
                        <img src={alaskaButton}/>
                    </div>
                    <div class="arizona">
                        <img src={arizonaButton}/>
                    </div>
                    <div class="arkansas">
                        <img src={arkansasButton}/>
                    </div>
                    <div class="california">
                        <img src={californiaButton}/>
                    </div>
                    <div class="colorado">
                        <img src={coloradoButton}/>
                    </div>
                    <div class="connecticut">
                        <img src={connecticutButton}/>
                    </div>
                    <div class="delaware">
                        <img src={delawareButton}/>
                    </div>
                    <div class="dc">
                        <img src={districtofcolombiaButton}/>
                    </div>
                    <div class="florida">
                        <img src={floridaButton}/>
                    </div>
                    <div class="georgia">
                        <img src={georgiaButton}/>
                    </div>
                    <div class="hawaii">
                        <img src={hawaiiButton}/>
                    </div>
                    <div class="idaho">
                        <img src={idahoButton}/>
                    </div>
                    <div class="illinois">
                        <img src={illinoisButton}/>
                    </div>
                    <div class="indiana">
                        <img src={indianaButton}/>
                    </div>
                    <div class="iowa">
                        <img src={iowaButton}/>
                    </div>
                    <div class="kansas">
                        <img src={kansasButton}/>
                    </div>
                    <div class="kentucky">
                        <img src={kentuckyButton}/>
                    </div>
                    <div class="louisiana">
                        <img src={louisianaButton}/>
                    </div>
                    <div class="maine">
                        <img src={maineButton}/>
                    </div>
                    <div class="maryland">
                        <img src={marylandButton}/>
                    </div>
                    <div class="massachusetts">
                        <img src={massachusettsButton}/>
                    </div>
                    <div class="michigan">
                        <img src={michiganButton}/>
                    </div>
                    <div class="minnesota">
                        <img src={minnesotaButton}/>
                    </div>
                    <div class="mississippi">
                        <img src={mississippiButton}/>
                    </div>
                    <div class="missouri">
                        <img src={missouriButton}/>
                    </div>
                    <div class="montana">
                        <img src={montanaButton}/>
                    </div>
                    <div class="nebraska">
                        <img src={nebraskaButton}/>
                    </div>
                    <div class="nevada">
                        <img src={nevadaButton}/>
                    </div>
                    <div class="newhampshire">
                        <img src={newhampshireButton}/>
                    </div>
                    <div class="newjersey">
                        <img src={newjerseyButton}/>
                    </div>
                    <div class="newmexico">
                        <img src={newmexicoButton}/>
                    </div>
                    <div class="newyork">
                        <img src={newyorkButton}/>
                    </div>
                    <div class="northcarolina">
                        <img src={northcarolinaButton}/>
                    </div>
                    <div class="northdakota">
                        <img src={northdakotaButton}/>
                    </div>
                    <div class="ohio">
                        <img src={ohioButton}/>
                    </div>
                    <div class="oklahoma">
                        <img src={oklahomaButton}/>
                    </div>
                    <div class="oregon">
                        <img src={oregonButton}/>
                    </div>
                    <div class="pennsylvania">
                        <img src={pennsylvaniaButton}/>
                    </div>
                    <div class="puertorico">
                        <img src={puertoricoButton}/>
                    </div>
                    <div class="rhodeisland">
                        <img src={rhodeislandButton}/>
                    </div>
                    <div class="southcarolina">
                        <img src={southcarolinaButton}/>
                    </div>
                    <div class="southdakota">
                        <img src={southdakotaButton}/>
                    </div>
                    <div class="tennessee">
                        <img src={tennesseeButton}/>
                    </div>
                    <div class="texas">
                        <img src={texasButton}/>
                    </div>
                    <div class="utah">
                        <img src={utahButton}/>
                    </div>
                    <div class="vermont">
                        <img src={vermontButton}/>
                    </div>
                    <div class="virginia">
                        <img src={virginiaButton}/>
                    </div>
                    <div class="washington">
                        <img src={washingtonButton}/>
                    </div>
                    <div class="westvirginia">
                        <img src={westvirginiaButton}/>
                    </div>
                    <div class="wisconson">
                        <img src={wisconsonButton}/>
                    </div>
                    <div class="wyoming">
                        <img src={wyomingButton}/>
                    </div>


            </section>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure
}

export default connect(state => state, mapDispatchToProps)(StatesPage);