// import axios from "axios";
// import axiosWithAuth from "../axios/axiosWithAuth";

//export as
export const SOME_ACTION = "SOME_ACTION";
export const SOME_FAILURE ="SOME-FAILURE";

//tie function entries to action's payload

export const somefunction = (optional_data) => ({type: SOME_ACTION, payload: optional_data})
export const functionFailure = (error) => ({type: SOME_FAILURE, payload: error})
//apply axiosWithAuth for dispatch

// const authAxios = axiosWithAuth();

//dispatch

// export const fetchArticles = () => dispatch => {

//     authAxios
//         .get('/articles')
//         .then(res => {
//             console.log("this is articles response.data", res)
//             dispatch(somefunction(res.data))
//         })
//         .catch(err => {
//             console.log("something went wrong with the test", err.message)
//             dispatch(functionFailure(err.message))
//         })
// }

// //for more see supportify