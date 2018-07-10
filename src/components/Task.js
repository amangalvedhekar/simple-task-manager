import React from 'react';

const TASK_STATUSES = [
  'Unstarted',
  'In Progress',
  'Completed'
];


const Task = props => {
  console.log('props inside task', props);
  return (
    <div className="task">
      <div className="task-header">
        <div>
          { props.task.title }
        </div>
        <select
          value={props.task.status}
          onChange={onStatusChange}>
          {TASK_STATUSES.map((task, index) => {
            return(
              <option
                key={index}
                value={task}>
                {task}
              </option>
            );
          })}
        </select>
      </div>
      <hr/>
      <div className="task-body">
        { props.task.description }
      </div>
    </div>
  );

  function onStatusChange(e) {
    console.log(e.target.value);
    props.onStatusChange(props.task.id, e.target.value);
  }
};

export default Task;
