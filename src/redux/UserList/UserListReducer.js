import * as ActionTypes from './UserListConstants'


export const userReducer = (state = {
    counter : 1,
    users: []
   
}, action) => {
    switch (action.type) {
    
            case ActionTypes.CHANGE_USERS:
                return {...state, users: [...state.users, action.payload], counter: state.counter + 1}
            
            case ActionTypes.REMOVE_USER:
                console.log(action.payload)
                
                const newUsersList =  state.users.filter((user) => user.id !== action.payload)
                console.log(newUsersList)
                return {...state, users: [...newUsersList] }
      

        

        default:
            return state;


        
            
    }   
}

