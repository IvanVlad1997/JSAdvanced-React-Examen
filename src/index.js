import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import configureStore from './redux/store'

const {store, persistor} = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App />
            </Router>
     </PersistGate>
    </Provider>,
    document.getElementById('root')
)