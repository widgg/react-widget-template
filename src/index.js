import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const account_id = '{{ACCOUNT_ID}}'

ReactDOM.render(<App />, document.querySelector('[widgg-name="{{WIDGET_NAME}}"][widgg-account-id="' + account_id + '"]'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
