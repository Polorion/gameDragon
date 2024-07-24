import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {store} from "./store/store.ts";
import {Provider} from "react-redux";
import {AppContainer} from "./AppContainer";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)
