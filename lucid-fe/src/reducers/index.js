import {
    SOME_ACTION,
    SOME_FAILURE
} from "../actions";

const initialState = {
    articles: [],
    success: false,
    failure: false,
    error: null
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
        default:
            return state
    }
}

//for more see supportify