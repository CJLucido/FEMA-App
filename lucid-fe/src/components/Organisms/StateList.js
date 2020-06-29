import React, {useEffect} from 'react'

import {connect} from 'react-redux'
import {fetchStatesUSA, searchHandle} from "../../actions"

import StateCard from "../Molecules/StateCard";


import {Row, Col, Divider, Spin} from 'antd';




function StateList(props){
    const searchHandle = props.searchHandle;

        useEffect(() => {
                searchHandle(props.currentProvince, props.startDate)
    }, [props.currentProvince, props.startDate]); // eslint-disable-line react-hooks/exhaustive-deps
    
    //, props.endDate removed due to insufficient api
    
console.log("this is province", props.currentProvince)
    return(
        <div>
        {/* <section className="search-form" onChange={() => props.searchHandle(props.currentProvince)}>
        <form>
           <label name="search">Search: </label>
           <input name="search" type="text" placeholder="Search by Symbol" value={name} onChange={handleNameChange}/>
        </form>
       </section > */}
            
            <Divider
                style={{
                justify:"center",
                alignItems:"flex-start",
                padding:"0 0 0 0",
            }}
            >
                <Row justify="space-around" align="top" padding="0 0 0 0" >
                <Col span={24} padding="0 0 0 0" >
                {

                props.stateUSA.map(item=> 
                    <StateCard 
                    key={item.id} 
                    stateName={item.state} 
                    titleDR={item.title}
                    beganDate={item.declarationDate}
                    closeDate={item.disasterCloseOutDate}
                    paProgramDeclared={item.paProgramDeclared}
                    iaProgramDeclared={item.iaProgramDeclared}
                    hmProgramDeclared={item.hmProgramDeclared}
                    disasterType={item.disasterType}
                    disasterNumber={item.disasterNumber}
                    />
                )


            }
                </Col>
                </Row>
            </Divider>
            {props.error && <p>{props.error.message}</p>}
            {props.isFetching && <Spin/>}
        </div>


    )
}

const mapDispatchToProps = {
    fetchStatesUSA,
    searchHandle
}

export default connect(state => state, mapDispatchToProps)(StateList)

//xs={12} sm={6} md={3}