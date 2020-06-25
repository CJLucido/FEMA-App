import React from "react";
//, {useEffect}
import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure,
    searchHandle,
    changeProvince
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

    const handleNameChange = (event) => {
        props.changeProvince(event.currentTarget.id)
    }

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
                    
                    <div class="alabama" id="AL" onClick={handleNameChange} >
                    <Link to="/statesold"  >
                        <img  src={alabamaButton} alt="circle surrounding state abbreviation" />
                    </Link>
                    </div>
                    <div id="AK" onClick={handleNameChange} class="alaska">
                       <Link to="/statesold">
                        <img src={alaskaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="AZ" onClick={handleNameChange} class="arizona">
                       <Link to="/statesold">
                        <img src={arizonaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="AR" onClick={handleNameChange} class="arkansas">
                       <Link to="/statesold">
                        <img src={arkansasButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="CA" onClick={handleNameChange} class="california">
                       <Link to="/statesold">
                        <img src={californiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="CO" onClick={handleNameChange} class="colorado">
                       <Link to="/statesold">
                        <img src={coloradoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="CT" onClick={handleNameChange} class="connecticut">
                       <Link to="/statesold">
                        <img src={connecticutButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="DE" onClick={handleNameChange} class="delaware">
                       <Link to="/statesold">
                        <img src={delawareButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="DC" onClick={handleNameChange} class="dc">
                       <Link to="/statesold">
                        <img src={districtofcolombiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="FL" onClick={handleNameChange} class="florida">
                       <Link to="/statesold">
                        <img src={floridaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="GA" onClick={handleNameChange} class="georgia">
                       <Link to="/statesold">
                        <img src={georgiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="HI" onClick={handleNameChange} class="hawaii">
                       <Link to="/statesold">
                        <img src={hawaiiButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="ID" onClick={handleNameChange} class="idaho">
                       <Link to="/statesold">
                        <img src={idahoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="IL" onClick={handleNameChange} class="illinois">
                       <Link to="/statesold">
                        <img src={illinoisButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="IN" onClick={handleNameChange} class="indiana">
                       <Link to="/statesold">
                        <img src={indianaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="IA" onClick={handleNameChange} class="iowa">
                       <Link to="/statesold">
                        <img src={iowaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="KS" onClick={handleNameChange} class="kansas">
                       <Link to="/statesold">
                        <img src={kansasButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="KY" onClick={handleNameChange} class="kentucky">
                       <Link to="/statesold">
                        <img src={kentuckyButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="LA" onClick={handleNameChange} class="louisiana">
                       <Link to="/statesold">
                        <img src={louisianaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="ME" onClick={handleNameChange} class="maine">
                       <Link to="/statesold">
                        <img src={maineButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MD" onClick={handleNameChange} class="maryland">
                       <Link to="/statesold">
                        <img src={marylandButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MA" onClick={handleNameChange} class="massachusetts">
                       <Link to="/statesold">
                        <img src={massachusettsButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MI" onClick={handleNameChange} class="michigan">
                       <Link to="/statesold">
                        <img src={michiganButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MN" onClick={handleNameChange} class="minnesota">
                       <Link to="/statesold">
                        <img src={minnesotaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MS" onClick={handleNameChange} class="mississippi">
                       <Link to="/statesold">
                        <img src={mississippiButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MO" onClick={handleNameChange} class="missouri">
                       <Link to="/statesold">
                        <img src={missouriButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="MT" onClick={handleNameChange} class="montana">
                       <Link to="/statesold">
                        <img src={montanaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NE" onClick={handleNameChange} class="nebraska">
                       <Link to="/statesold">
                        <img src={nebraskaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NV" onClick={handleNameChange} class="nevada">
                       <Link to="/statesold">
                        <img src={nevadaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NH" onClick={handleNameChange} class="newhampshire">
                       <Link to="/statesold">
                        <img src={newhampshireButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NJ" onClick={handleNameChange} class="newjersey">
                       <Link to="/statesold">
                        <img src={newjerseyButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NM" onClick={handleNameChange} class="newmexico">
                       <Link to="/statesold">
                        <img src={newmexicoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NY" onClick={handleNameChange} class="newyork">
                       <Link to="/statesold">
                        <img src={newyorkButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="NC" onClick={handleNameChange} class="northcarolina">
                       <Link to="/statesold">
                        <img src={northcarolinaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="ND" onClick={handleNameChange} class="northdakota">
                       <Link to="/statesold">
                        <img src={northdakotaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="OH" onClick={handleNameChange} class="ohio">
                       <Link to="/statesold">
                        <img src={ohioButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="OK" onClick={handleNameChange} class="oklahoma">
                       <Link to="/statesold">
                        <img src={oklahomaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="OR" onClick={handleNameChange} class="oregon">
                       <Link to="/statesold">
                        <img src={oregonButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="PA" onClick={handleNameChange} class="pennsylvania">
                       <Link to="/statesold">
                        <img src={pennsylvaniaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="PR" onClick={handleNameChange} class="puertorico">
                       <Link to="/statesold">
                        <img src={puertoricoButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="RI" onClick={handleNameChange} class="rhodeisland">
                       <Link to="/statesold">
                        <img src={rhodeislandButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="SC" onClick={handleNameChange} class="southcarolina">
                       <Link to="/statesold">
                        <img src={southcarolinaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="SD" onClick={handleNameChange} class="southdakota">
                       <Link to="/statesold">
                        <img src={southdakotaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="TN" onClick={handleNameChange} class="tennessee">
                       <Link to="/statesold">
                        <img src={tennesseeButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="TX" onClick={handleNameChange} class="texas">
                       <Link to="/statesold">
                        <img src={texasButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="UT" onClick={handleNameChange} class="utah">
                       <Link to="/statesold">
                        <img src={utahButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="VT" onClick={handleNameChange} class="vermont">
                       <Link to="/statesold">
                        <img src={vermontButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="VA" onClick={handleNameChange} class="virginia">
                       <Link to="/statesold">
                        <img src={virginiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="WA" onClick={handleNameChange} class="washington">
                       <Link to="/statesold">
                        <img src={washingtonButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="WV" onClick={handleNameChange} class="westvirginia">
                       <Link to="/statesold">
                        <img src={westvirginiaButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="WI" onClick={handleNameChange} class="wisconson">
                       <Link to="/statesold">
                        <img src={wisconsonButton} alt="circle surrounding state abbreviation" />
                        </Link>
                    </div>
                    <div id="WY" onClick={handleNameChange} class="wyoming">
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
    functionFailure,
    searchHandle,
    changeProvince
}

export default connect(state => state, mapDispatchToProps)(StatesPage);