import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import tasks from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  tasks,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(<Provider
    store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
