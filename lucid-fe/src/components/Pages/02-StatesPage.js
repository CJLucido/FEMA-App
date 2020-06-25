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
import {Link} from "react-router-dom";

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
                <div class="grid-states">
                    <div class="flex-box-states s2-a-title">
                        <h1>DR Finder</h1>
                    </div>   
                    <div class="state-instructions-box">
                        <img src={stateMessage} alt="box with unclosed corners giving direction to choose a state from the list"/>
                    </div>
                    
                    <div class="alabama">
                    <Link to="/statesold">
                        <img src={alabamaButton} alt="circle surrounding state abbreviation" />
                    </Link>
                    </div>
                    <div class="alaska">
                       <Link to="/statesold">
                        <img src={alaskaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="arizona">
                       <Link to="/statesold">
                        <img src={arizonaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="arkansas">
                       <Link to="/statesold">
                        <img src={arkansasButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="california">
                       <Link to="/statesold">
                        <img src={californiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="colorado">
                       <Link to="/statesold">
                        <img src={coloradoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="connecticut">
                       <Link to="/statesold">
                        <img src={connecticutButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="delaware">
                       <Link to="/statesold">
                        <img src={delawareButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="dc">
                       <Link to="/statesold">
                        <img src={districtofcolombiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="florida">
                       <Link to="/statesold">
                        <img src={floridaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="georgia">
                       <Link to="/statesold">
                        <img src={georgiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="hawaii">
                       <Link to="/statesold">
                        <img src={hawaiiButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="idaho">
                       <Link to="/statesold">
                        <img src={idahoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="illinois">
                       <Link to="/statesold">
                        <img src={illinoisButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="indiana">
                       <Link to="/statesold">
                        <img src={indianaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="iowa">
                       <Link to="/statesold">
                        <img src={iowaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="kansas">
                       <Link to="/statesold">
                        <img src={kansasButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="kentucky">
                       <Link to="/statesold">
                        <img src={kentuckyButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="louisiana">
                       <Link to="/statesold">
                        <img src={louisianaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="maine">
                       <Link to="/statesold">
                        <img src={maineButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="maryland">
                       <Link to="/statesold">
                        <img src={marylandButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="massachusetts">
                       <Link to="/statesold">
                        <img src={massachusettsButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="michigan">
                       <Link to="/statesold">
                        <img src={michiganButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="minnesota">
                       <Link to="/statesold">
                        <img src={minnesotaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="mississippi">
                       <Link to="/statesold">
                        <img src={mississippiButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="missouri">
                       <Link to="/statesold">
                        <img src={missouriButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="montana">
                       <Link to="/statesold">
                        <img src={montanaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="nebraska">
                       <Link to="/statesold">
                        <img src={nebraskaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="nevada">
                       <Link to="/statesold">
                        <img src={nevadaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="newhampshire">
                       <Link to="/statesold">
                        <img src={newhampshireButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="newjersey">
                       <Link to="/statesold">
                        <img src={newjerseyButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="newmexico">
                       <Link to="/statesold">
                        <img src={newmexicoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="newyork">
                       <Link to="/statesold">
                        <img src={newyorkButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="northcarolina">
                       <Link to="/statesold">
                        <img src={northcarolinaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="northdakota">
                       <Link to="/statesold">
                        <img src={northdakotaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="ohio">
                       <Link to="/statesold">
                        <img src={ohioButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="oklahoma">
                       <Link to="/statesold">
                        <img src={oklahomaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="oregon">
                       <Link to="/statesold">
                        <img src={oregonButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="pennsylvania">
                       <Link to="/statesold">
                        <img src={pennsylvaniaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="puertorico">
                       <Link to="/statesold">
                        <img src={puertoricoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="rhodeisland">
                       <Link to="/statesold">
                        <img src={rhodeislandButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="southcarolina">
                       <Link to="/statesold">
                        <img src={southcarolinaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="southdakota">
                       <Link to="/statesold">
                        <img src={southdakotaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="tennessee">
                       <Link to="/statesold">
                        <img src={tennesseeButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="texas">
                       <Link to="/statesold">
                        <img src={texasButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="utah">
                       <Link to="/statesold">
                        <img src={utahButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="vermont">
                       <Link to="/statesold">
                        <img src={vermontButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="virginia">
                       <Link to="/statesold">
                        <img src={virginiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="washington">
                       <Link to="/statesold">
                        <img src={washingtonButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="westvirginia">
                       <Link to="/statesold">
                        <img src={westvirginiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="wisconson">
                       <Link to="/statesold">
                        <img src={wisconsonButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div class="wyoming">
                       <Link to="/statesold">
                        <img src={wyomingButton} alt="circle surrounding state abbreviation" />
                        </Link>
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

export default connect(state => state, mapDispatchToProps)(StatesPage);