import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {userReducer} from './Checklist/ChecklistReducer'

const rootReducer =  combineReducers({
    
    userReducer: userReducer
})

const persistConfig = {
    blacklist: [],
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   

const  ConfigureStore = () => {
    let store = createStore(persistedReducer,
        applyMiddleware(thunk, logger))

        let persistor = persistStore(store)
        
        return {store, persistor};
        
        
}

export default ConfigureStore