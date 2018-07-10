import React from 'react';

const TaskStatus = props => {
  return (
    <select
      value={props.status}
      onChange={onStatusChange}>
      {props.list.map((item, index) => {
        return (
          <option
            key={index}
            value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );

  function onStatusChange(e) {
    props.onStatusChange(props.taskId, e.target.value);
  }
};

export default TaskStatus;
