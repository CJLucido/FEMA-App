import React, {useEffect} from 'react'

import {connect} from 'react-redux'
import { pwHandle} from "../../actions"

import PWCard from "../Molecules/PWCard";


import {Row, Col, Divider} from 'antd';




function PWList(props){
    const pwHandle = props.pwHandle;

        useEffect(() => {
                pwHandle(props.currentProvince, props.drNumber, props.category)
    }, [props.currentProvince, props.drNumber, props.category]); // eslint-disable-line react-hooks/exhaustive-deps
    
    //, props.endDate removed due to insufficient api
    
console.log("this is province", props.currentProvince)
    return(
        <div>
        {/* <section className="search-form" onChange={() => props.pwHandle(props.currentProvince)}>
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
                <Row type="flex" height="100%" justify="space-around" align="top" padding="0 0 0 0" >
                <Col span={24} flex="auto" padding="0 0 0 0" >
                
                   { // if(props.projectAmount !== " ")}
                
                props.projectWorksheets.map(item=> 
                    <PWCard 
                    key={item.id} 
                    stateCode={item.stateCode} 
                    obligatedDate={item.obligatedDate}
                    pwNumber={item.pwNumber}
                    county={item.county}
                    applicantId={item.applicantId}
                    projectAmount={item.projectAmount}
                    federalShareObligated={item.federalShareObligated}
                    totalObligatedPW={item.totalObligated}
                    />
                )
/*             
                else{
                    return <p>Sorry no data for that PW</p>
                } */}


            
                </Col>
                </Row>
            </Divider>
            {props.error && <p>{props.error.message}</p>}
        </div>


    )
}

const mapDispatchToProps = {

    pwHandle
}

export default connect(state => state, mapDispatchToProps)(PWList)

//xs={12} sm={6} md={3}