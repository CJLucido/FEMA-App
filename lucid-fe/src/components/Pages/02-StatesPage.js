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
                        <img src={alabamaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="alaska">
                        <img src={alaskaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="arizona">
                        <img src={arizonaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="arkansas">
                        <img src={arkansasButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="california">
                        <img src={californiaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="colorado">
                        <img src={coloradoButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="connecticut">
                        <img src={connecticutButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="delaware">
                        <img src={delawareButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="dc">
                        <img src={districtofcolombiaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="florida">
                        <img src={floridaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="georgia">
                        <img src={georgiaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="hawaii">
                        <img src={hawaiiButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="idaho">
                        <img src={idahoButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="illinois">
                        <img src={illinoisButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="indiana">
                        <img src={indianaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="iowa">
                        <img src={iowaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="kansas">
                        <img src={kansasButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="kentucky">
                        <img src={kentuckyButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="louisiana">
                        <img src={louisianaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="maine">
                        <img src={maineButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="maryland">
                        <img src={marylandButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="massachusetts">
                        <img src={massachusettsButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="michigan">
                        <img src={michiganButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="minnesota">
                        <img src={minnesotaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="mississippi">
                        <img src={mississippiButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="missouri">
                        <img src={missouriButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="montana">
                        <img src={montanaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="nebraska">
                        <img src={nebraskaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="nevada">
                        <img src={nevadaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="newhampshire">
                        <img src={newhampshireButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="newjersey">
                        <img src={newjerseyButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="newmexico">
                        <img src={newmexicoButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="newyork">
                        <img src={newyorkButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="northcarolina">
                        <img src={northcarolinaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="northdakota">
                        <img src={northdakotaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="ohio">
                        <img src={ohioButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="oklahoma">
                        <img src={oklahomaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="oregon">
                        <img src={oregonButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="pennsylvania">
                        <img src={pennsylvaniaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="puertorico">
                        <img src={puertoricoButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="rhodeisland">
                        <img src={rhodeislandButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="southcarolina">
                        <img src={southcarolinaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="southdakota">
                        <img src={southdakotaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="tennessee">
                        <img src={tennesseeButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="texas">
                        <img src={texasButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="utah">
                        <img src={utahButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="vermont">
                        <img src={vermontButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="virginia">
                        <img src={virginiaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="washington">
                        <img src={washingtonButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="westvirginia">
                        <img src={westvirginiaButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="wisconson">
                        <img src={wisconsonButton} alt="circle surrounding state abbreviation" />
                    </div>
                    <div class="wyoming">
                        <img src={wyomingButton} alt="circle surrounding state abbreviation" />
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