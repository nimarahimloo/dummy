import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from "./contexts/JWTContext";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import {CollapseDrawerProvider} from "./contexts/CollapseDrawerContext";

ReactDOM.render(
    <AuthProvider>
        <HelmetProvider>
            <CollapseDrawerProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </CollapseDrawerProvider>
        </HelmetProvider>
    </AuthProvider>,
    document.getElementById('root')
);
