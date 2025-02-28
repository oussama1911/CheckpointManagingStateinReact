import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import {useNavigate} from 'react-router'


const TaskList = ({handleDelete , handleStatusChange , tasks }) => {

    const nav = useNavigate()

  return (
    <div className='task-list'>
        {tasks && (tasks.map(task => (
          <TaskItem
           key={task.id} 
           task={task}
           handleStatusChange={handleStatusChange}
           handleDelete={handleDelete}
           />)))
           }
        <button onClick={()=> nav('/add')}> add task</button>
    </div>
  )
}

export default TaskList