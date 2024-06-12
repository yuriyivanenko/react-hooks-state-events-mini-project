import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        // If statement includes 'task.display === undefined' in order to pass the test
          {if(task.display === true || task.display === undefined){
            return (
              <Task 
                key={index} 
                text={task.text} 
                category={task.category} 
                handleDeleteTask={handleDeleteTask} 
              /> 
            )
          }}
      })}
    </div>
  );
}

export default TaskList;
