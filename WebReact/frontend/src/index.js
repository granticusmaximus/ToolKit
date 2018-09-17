import React from 'react';
import App from './App';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from './_helpers';
import { Provider } from 'react-redux';

import { configureFakeBackend } from '../src/_helpers/fake-backend';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
