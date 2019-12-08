import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import App from "./routes/app";
import rootReducer from "./reducers/rootReducer"
import {ThemeProvider} from "styled-components";

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = {
    Primary: "#40ef40",
    Secondary: "#070707c9"
}
render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);