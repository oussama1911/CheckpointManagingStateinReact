import React, { useContext } from 'react'
import { taskContext } from '../context/taskContext'
import TaskItem from './TaskItem'
import {useNavigate} from 'react-router'


const TaskList = () => {

    const nav = useNavigate()

    const {tasks} = useContext(taskContext)



  return (
    <div className='task-list'>
        {tasks.map(task => (<TaskItem key={task.id} task={task}/>))}
        <button onClick={()=> nav('/add')}> add task</button>
    </div>
  )
}

export default TaskList