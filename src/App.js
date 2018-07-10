import React, {Component} from 'react';
import TasksPage from './components/TasksPage';
import {mockTasks} from './mocks';
import './index.css';

class App extends Component {
  render() {
    console.log(mockTasks);
    return (
      <div>
        <TasksPage
          tasks={mockTasks}/>
      </div>
    );
  }
}

export default App;
