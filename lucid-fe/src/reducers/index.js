import {
    SOME_ACTION,
    SOME_FAILURE,
    FEMA_LOAD_SUCCESS,
     FEMA_LOAD_FAILURE,
     FEMA_LOADING,
     CHANGE_PROVINCE,
     CHANGE_START,
     CHANGE_END,
     CHANGE_DR,
     PW_LOAD_SUCCESS,
     PW_LOAD_REDIRECT,
     CHANGE_CAT,
     UPDATE_SUMS_OBLIGATED,
     PW_FUNDING
} from "../actions";

const initialState = {
    articles: [],
    success: false,
    failure: false,
    error: null,
    stateUSA: [], //not sure if this will be an object or array. IT IS a 1000 element array of objects with 19 properties. changed from null
    projectWorksheets: [],
    isFetching: false,

    currentProvince: "",
    startDate: "1953-01-01T00:00:00.000Z",
    endDate: "2020-12-31T24:60:60.000Z",
    drNumber: " ",
    category:"A",

    totalObligated: 0,
    totalFederal: 0,
    statesAvailableDRs: [],
    funding:{"children":[{"PW":"1","value":"300"},{"PW":"2","value":"150"},{"PW":"3","value":"200"}]}
}

export function reducer(state = initialState, action){
    switch(action.type){
        case SOME_ACTION:
            return{
                ...state,
                articles: action.payload,
                success: true
            }
        case SOME_FAILURE:
            return{
                ...state,
                success: false,
                failure:true,
                error: action.payload
            }
        case FEMA_LOAD_SUCCESS:
            return {
                ...state,
                stateUSA: action.payload,
                isFetching: false,
                error: null
            }
        case FEMA_LOAD_FAILURE:
            return {
                ...state,
                stateUSA: [],
                isFetching: false,
                error: action.payload
            }
        case FEMA_LOADING:
            return {
                ...state,
               isFetching: true,
               error: null 
            }
        case CHANGE_PROVINCE:
            return{
                ...state,
                currentProvince: action.payload
            }
        case CHANGE_START:
            return{
                ...state,
                startDate: action.payload + "-01-01T00:00:00.000Z"
            }
        case CHANGE_END:
            return{
                ...state,
                endDate: action.payload + "-12-31T24:60:60.000Z"
            }
        case CHANGE_DR:
            return{
                ...state,
                drNumber: action.payload
            }
        case PW_LOAD_SUCCESS:
            return{
                ...state,
                projectWorksheets: action.payload
            }
        case PW_LOAD_REDIRECT:
            return{
                ...state,
                statesAvailableDRs: action.payload
            }
        case CHANGE_CAT:
            return{
                ...state,
                category: action.payload
            }
        case UPDATE_SUMS_OBLIGATED:
            return{
                ...state,
                totalObligated: action.payload1,
                totalFederal: action.payload2
            }
        case PW_FUNDING:
            return{
                ...state,
                funding:JSON.stringify({"children": [action.payload]})
            }
        default:
            return state
    }
}

//for more see supportify