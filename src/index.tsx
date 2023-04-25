import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./Reducer/redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>

            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

