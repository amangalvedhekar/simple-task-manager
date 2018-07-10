import React from 'react';
import TaskStatus from './TaskStatus';

const TASK_STATUSES = [
  'Unstarted',
  'In Progress',
  'Completed'
];


const Task = props => {
  return (
    <div className="task">
      <div className="task-header">
        <div>
          <h3>{ props.task.title }</h3>
        </div>
        <TaskStatus
          status={props.task.status}
          taskId={props.task.id}
          list={TASK_STATUSES}
          onStatusChange={props.onStatusChange}
        />
      </div>
      <hr/>
      <div className="task-body">
        { props.task.description }
      </div>
    </div>
  );
};

export default Task;
