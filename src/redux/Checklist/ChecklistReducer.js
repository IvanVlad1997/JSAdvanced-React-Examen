import * as ActionTypes from './CheckListConstants'


export const checkReducer = (state = {
   option: '',
   checks1: [],
   checks2: [],
   checks3: []
 
   
}, action) => {
    switch (action.type) {
    
            case ActionTypes.CHANGE_CHECK:
                return {...state, option: action.payload}
            
            case ActionTypes.CHANGE_CHECKS:
                
                return {...state, checks1: action.payload.checked1, checks2: action.payload.checked2, checks3: action.payload.checked3 }
           

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES