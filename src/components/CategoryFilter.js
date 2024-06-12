import React, { useState } from "react";

function CategoryFilter({ categories, handleFilterTask }) {
  const [categoryList, setCategoryList] = useState(categories.map(category => {
      return {
        category: category,
        class: ''
      }
    }))

  const handleFilter = (category) => {
    setCategoryList(categoryList.map(item => {
      if(item.category === category){
        return {
          ...item,
          class: 'selected'
        }
      } else {
        return {
          ...item,
          class: ''
        }
      }
    }))
    handleFilterTask(category)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList.map((item, index) => { 
        return(
          <button key={index} className={item.class} onClick={() => handleFilter(item.category)} >{item.category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
