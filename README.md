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

* Tags in JSX --> JSX elements will have closing tag if the element has content inside the element
```javascript
const reactElement = <div/>;
const closingTagElement = <div>some content</div>
```

# React
* Element is rendered by calling `render` method from `ReactDOM`
```javascript
const element = <div>this is element</div>;
ReactDOM.render(element, document.getElementById('root'));
```
* __Component__
  * Javascript function 
  * accepts properties aka props
  * returns React elements to be displayed on the screen
  * Can be defined either using __function__ or __class__
  * name must be initialized uppercase ie - __MyComponent__

* __Props__ & __State__
  * Props
    * are read only
    * Components defined by class and function have access to props
    * passed down from parent to child component thus facilitating uni directional flow of data
    * default value can be provided by `ComponentName.defaultProps = {propName: value}`
    * `prop-types` package can be used for type check 
    ```javascript
    ComponentName.propTypes = {
      propName: PropTypes.type.isRequired
    }
    ```

  * State
    * are private members 
    * accessible for components defined using class
    * initialized inside the constructor
    * can be modified using `setState` function which is asynchronous in nature
    
* __Lifecycle hooks__
  * Mounting
    * constructor
    * render
    * componentDidMount
    
  * Updating
    * shouldComponentUpdate
    * render
    * componentDidUpdate
    
  * Unmounting
    * componentWillUnmount
    
# Redux
 
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
//...
const store = createStore(
  //...
  composeWithDevTools(applyMiddleware(thunk))
);
```
## Graphical Presentation of redux with thunk

![](public/redux.jpg?raw=true)
