This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# react
* ` componentDidMount() `

# redux
 
*  *Action* 
* *Action Creator*
    * *Synchronous*
    * *Asynchronous*

# redux-thunk - redux middleware
**_redux-thunk enables to dispatch functions 
rather than objects which can be useful for asynchronous events_**
## Getting Started
* Import ` applyMiddleware ` from ` redux ` package
* Import ` thunk ` from ` redux-thunk ` package
* Pass ` thunk ` as parameter for ` applyMiddleware ` 
* Pass the above function as second parameter to ` createStore ` from ` redux ` package
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
...

const store = createStore(
  ...
  composeWithDevTools(applyMiddleware(thunk))
);
```


