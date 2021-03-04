import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { App } from './App';
import configureStore, {history} from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <App store={store} history={history}/>,
  document.getElementById('root')
);