import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: '',
    category: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" value={formData.text} name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange} >
          {categories.map(category => {
            if(category !== 'All'){
              return <option key={category} >{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
