import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import { addUser, loadData } from "./actions/index";

import './css/style.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducer)
store.dispatch(addUser());
store.dispatch(loadData());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
