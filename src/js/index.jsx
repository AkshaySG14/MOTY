import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store/index";
import App from "./components/App";

const my_context = React.createContext();

render(
    <Provider context={my_context} store={store}>
        <App context={my_context}/>
    </Provider>,
    document.getElementById('root')
);
