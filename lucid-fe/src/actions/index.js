import axios from "axios";
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

export const FEMA_LOAD_SUCCESS = "FEMA_LOAD_SUCCESS";
        
export const FEMA_LOAD_FAILURE =  "FEMA_LOAD_FAILURE";

export const FEMA_LOADING =  "FEMA_LOADING";

export const SET_QUERY = "SET_QUERY";

export const CHANGE_PROVINCE = "CHANGE_PROVINCE";

export const CHANGE_START = "CHANGE_START";

export const CHANGE_END = "CHANGE_END";

export const CHANGE_DR = "CHANGE_DR";

export const PW_LOAD_SUCCESS = "PW_LOAD_SUCCESS";

export const PW_LOAD_REDIRECT = "PW_LOAD_REDIRECT";

export const CHANGE_CAT = "CHANGE_CAT";

export const UPDATE_SUMS_OBLIGATED = "UPDATE_SUMS_OBLIGATED";
  
export const PW_FUNDING = "PW_FUNDING";

export const femaLoadSuccess = data => ({
    type: FEMA_LOAD_SUCCESS,
    payload: data
});

export const femaLoadFailure = data => ({
    type: FEMA_LOAD_FAILURE,
    payload: data
});

export const femaLoading = () => ({
    type: FEMA_LOADING
});

///////////////////////////////////////////////////


export const changeProvince = currentProvince => ({
    type: CHANGE_PROVINCE,
    payload: currentProvince
});
 
export const changeStart = startDate => ({
    type: CHANGE_START,
    payload: startDate
});

export const changeEnd = endDate => ({
    type: CHANGE_END,
    payload: endDate
});

export const changeDR = drNumber => ({
    type: CHANGE_DR,
    payload: drNumber
});

export const changeCat = category => ({
    type: CHANGE_CAT,
    payload: category
});

/////////////////////////////////////////////////////

//PWs

export const pwLoadSuccess = data => ({
    type:PW_LOAD_SUCCESS,
    payload: data
});


export const pwLoadRedirect = data => ({
    type:PW_LOAD_REDIRECT,
    payload: data
});

export const updateSumsObligated = (totalObligated, totalFedObligated) => ({
    type: UPDATE_SUMS_OBLIGATED,
    payload1: totalObligated,
    payload2: totalFedObligated
});

export const pwFunding = data => ({
    type: PW_FUNDING,
    payload: data
})

///////////////////////////////////////////////////

export const fundingHandle = (name, drNumber, category) => dispatch => {
    
    const config = {
        headers:{
            'accept': "application/json"
        }
    }

    dispatch(femaLoading());
    console.log("this is search name funding", name)
    axios
    .get(`https://www.fema.gov/api/open/v1/PublicAssistanceFundedProjectsDetails?$filter=startswith(stateCode,'${name}') and disasterNumber eq ${parseInt(drNumber)} and dcc eq '${category}'`, config) //and declarationDate le '${endDate}' removed because api doesn't allow for it
    .then(res =>
    {    console.log('this is the search response', res)

    const fundingArr = res.data.PublicAssistanceFundedProjectsDetails.map(item => {
        return {"PW" : item.pwNumber, "value" : item.federalShareObligated}
        });
        dispatch(pwFunding(fundingArr))}
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
  };

export const fetchStatesUSA= () => dispatch =>{
    dispatch(femaLoading());
    axios
    .get("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=startswith(state,'FL')")
    .then(res =>
        dispatch(femaLoadSuccess(res.data.DisasterDeclarationsSummaries))
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
};


  export const searchHandle = (name, startDate) => dispatch => {
    
    dispatch(femaLoading());
    console.log("this is search name", name)
    axios
    .get(`https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=startswith(state,'${name}') and declarationDate ge '${startDate}' `) //and declarationDate le '${endDate}' removed because api doesn't allow for it
    .then(res =>
    {    console.log('this is the search response', res)
        dispatch(femaLoadSuccess(res.data.DisasterDeclarationsSummaries))}
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
  };


  export const pwHandle = (name, drNumber, category) => dispatch => {
    
    function removeDuplicates(data){
        let unique = [];
        data.forEach(drAvailable => {
            if(!unique.includes(drAvailable))
            {unique.push(drAvailable)}
        })
        return unique;
    };

    function sumArray(data){
        let sum = data.reduce(function(a, b){
            return a + b;
        },0);

        return sum
    }


    dispatch(femaLoading());
    console.log("this is search name", name)
    axios
    .get(`https://www.fema.gov/api/open/v1/PublicAssistanceFundedProjectsDetails?$filter=startswith(stateCode,'${name}') and disasterNumber eq ${parseInt(drNumber)} and dcc eq '${category}' `) 
    .then(res =>
    {   
    
        const obligatedArr = res.data.PublicAssistanceFundedProjectsDetails.map(item => {
            return item.totalObligated
            });
        const obligatedFedArr = res.data.PublicAssistanceFundedProjectsDetails.map(item => {
            return item.federalShareObligated
            });
        
        const sumTotalObligated = sumArray(obligatedArr);
        const sumFedObligated = sumArray(obligatedFedArr);

        dispatch(updateSumsObligated(sumTotalObligated, sumFedObligated));

        if(res.data.PublicAssistanceFundedProjectsDetails.length > 0){
            console.log('this is the search response', res)
            dispatch(pwLoadSuccess(res.data.PublicAssistanceFundedProjectsDetails))
            dispatch(pwLoadRedirect([]))
        }
        else{
            axios
            .get(`https://www.fema.gov/api/open/v1/PublicAssistanceFundedProjectsDetails?$filter=startswith(stateCode,'${name}')`)
            .then( res => {
                console.log('this is the search response lower', res)
                const drAvailable = res.data.PublicAssistanceFundedProjectsDetails.map(item => {
                    return item.disasterNumber
                });
               const statesDRs = removeDuplicates(drAvailable);
                dispatch(pwLoadRedirect(statesDRs))
                dispatch(pwLoadSuccess([]))

            })
            .catch(err => {
                console.log("lower failure")
                dispatch(femaLoadFailure(err))}
                )
        }
    
    }
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
  };

// https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$orderby=state

//res.data.DisasterDeclarationsSummaries.splice(0,50))
//© 2020 GitHub, Inc.