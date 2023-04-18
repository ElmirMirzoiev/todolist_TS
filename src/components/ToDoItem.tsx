import React from 'react'
import Button from './shared/Button'

const ToDoItem = () => {

    const ToDos = [
        {id: 1 , title: 'Need toDo', tag: 'doing'},
        {id: 2 , title: 'Need toDo', tag: 'doing'},
        {id: 3 , title: 'Need toDo', tag: 'doing'},
        {id: 4 , title: 'Need toDo', tag: 'doing'}
    ]

  return (
    <div>
        {
           ToDos.map( (t) => {
            return  <div>
                t.title
            <Button />
            <Button />
            </div>
           }) 
        }
        
    </div>
  )
}

export default ToDoItem