import * as ActionTypes from './CheckListConstants'

export const changeCheck = (payload) => (dispatch) => {
    return (
        dispatch({
            type:ActionTypes.CHANGE_CHECK,
            payload
            
        })
    )
}

export const changeChecks = (payload) => (dispatch) => {
    return (
        dispatch({
            type:ActionTypes.CHANGE_CHECKS,
            payload
            
        })
    )
}


