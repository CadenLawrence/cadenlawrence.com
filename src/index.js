import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Route';
import registerServiceWorker from './registerServiceWorker';

const div = document.getElementById('root');
ReactDOM.render(<App />, div);
registerServiceWorker();