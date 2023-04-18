import React from 'react'
import ToDoItem from './ToDoItem'
import Search from './shared/Search'

const ToDoList = () => {
  return (
    <div>
        <Search />
        <ToDoItem />
    </div>
  )
}

export default ToDoList