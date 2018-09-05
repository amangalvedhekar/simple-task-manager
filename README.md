This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
# JSX
* JSX --> Javascript and XML
* generates __React elements__
* ```const example = <div>I am JSX element</div>```
* __Expressions in JSX__
```javascript
const name = 'something';
const expressionExample = <h1>Hello, {name}</h1>;
```
* __Events and styling in JSX__ --> Events in JSX are camel cased. So click event
will be used as onClick blur as onBlur so on...Also to add class attribute will be className
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
import thunk from 'redux-thunk'
...

const store = createStore(
  ...
  composeWithDevTools(applyMiddleware(thunk))
);
```
## Graphical Presentation of redux with thunk

![](public/redux.jpg?raw=true)
