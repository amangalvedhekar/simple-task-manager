import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import taskReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = (state = {}, action) => {
  return {
    tasks: taskReducer(
      state.tasks,
      action
    ),
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  ),
);

ReactDOM.render(
  <Provider
    store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
