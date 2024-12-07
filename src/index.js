import React, { StrictMode } from "react";
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import {persistor, store} from './App/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store = {store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

