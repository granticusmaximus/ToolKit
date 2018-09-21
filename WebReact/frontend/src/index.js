import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
