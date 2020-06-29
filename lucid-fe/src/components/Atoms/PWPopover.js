// import React, {useState} from 'react';

// import {connect} from "react-redux";

// import {Popover, Button} from 'antd';

// //ACTION FUNCTIONS
// import{
//     changeDR
// } from "../../actions";

// function PWPopover(props) {

//     const [hover, setHover] = useState(false)
//     const [clicked, setClicked] = useState(false)
 
//     const hide = () => {
//         setHover(false);
//         setClicked(false);
//     }

//    const handleHoverChange = (visible) => {
//         setHover(visible);
//         setClicked(false);
//     }

//     const handleClickChange = (visible) => {
//         setHover(false);
//         setClicked(visible);
//     }

// const hoverContent = <div>
//                         PW {props.pwNumber}<br/>
//                         {props.federalShareObligated}/<br/>
//                         {props.totalFederal}
                    
//                     </div>
// const clickedContent = <div>PW {props.pwNumber}</div>

// // {props.pwNumber}
// // {props.applicantId}
// // {props.totalFederal}  
// // {props.federalShareObligated}

// console.log("popover", props.pwNumber)
//   return (
// <circle>  
//      <Popover
//         style={{width:"50vw"}}
//         content={hoverContent}
//         title={props.pwNumber}
//         trigger="hover"
//         visible={hover}
//         onVisibleChange={handleHoverChange}
//         >
//   <Popover
//         style={{width:"50vw"}}
//         content={
//         <div>{clickedContent}
//         <a onClick={hide}>Close</a>
//         </div>
//             }
//         title={props.pwNumber}
//         trigger="click"
//         visible={clicked}
//         onVisibleChange={handleClickChange}
//         >
//             <Button>PW {props.pwNumber}</Button>

            
//         </Popover>


//         </Popover>

//         </circle> 


//   );
// }


// const mapDispatchToProps ={

//   changeDR
// }

// export default connect(state => state, mapDispatchToProps)(PWPopover);