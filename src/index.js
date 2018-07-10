import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import tasks from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  tasks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider
    store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
