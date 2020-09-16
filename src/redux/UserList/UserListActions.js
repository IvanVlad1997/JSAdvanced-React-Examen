import * as ActionTypes from './UserListConstants'

export const changeUsers = (payload) => (dispatch) => {
    return (
        dispatch({
            type:ActionTypes.CHANGE_USERS,
            payload
            
        })
    )
}

export const removeUser = (payload) => (dispatch) => {
    return (
        dispatch({
            type:ActionTypes.REMOVE_USER,
            payload
        })
    )
}