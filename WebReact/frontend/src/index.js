import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(postReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
