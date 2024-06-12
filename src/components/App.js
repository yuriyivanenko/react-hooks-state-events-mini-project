import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS.map(task => {
    return {
      text: task.text,
      category: task.category,
      display: true
    }
  })) 

  const handleDeleteTask = (taskToDelete) => {
    setTaskList(taskList.filter(task => task.text !== taskToDelete))
  }

  const handleFilterTask = (category) => {
    if(category === 'All'){
      setTaskList(taskList.map(task => {
        return {
          ...task,
          display: true
        }
      }))
    } else {
      setTaskList(taskList.map(task => {
        if(task.category == category){
          return {
            ...task,
            display: true
          }
        } else {
          return {
            ...task,
            display: false
          }
        }
      }))
    }
  }

  const onTaskFormSubmit = (newTask) => {
    console.log(newTask)
    setTaskList([...taskList,{
      text: newTask.text,
      category: newTask.category,
      display: true
    }])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilterTask={handleFilterTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={taskList} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
