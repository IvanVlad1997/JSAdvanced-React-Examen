import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({

})

const persistConfig = {
    blacklist: [],
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    let store = createStore(persistedReducer,
        applyMiddleware(thunk, logger))


    let persistor = persistStore(store)

    return {store, persistor}
}

export default configureStore