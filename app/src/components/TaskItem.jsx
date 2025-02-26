import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { taskContext } from '../context/taskContext'

const TaskItem = ({ task }) => {

    const { tasks, setTasks } = useContext(taskContext)

    const nav = useNavigate()

    function handleChangeStatus() {
        setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t))
    }
    function handleDelete(){
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    return (
        <div className={`task-item ${task.done ? 'task-done' : 'task-pending'}`}>
            <h3> {task.name}</h3>
            <p className='date'>{task.date}</p>
            <p>{task.description}</p>
            <div className='task-btns'>
                <p onClick={handleChangeStatus}>{task.done ? ' ✅' : '🚫'}</p>
                <p onClick={handleDelete}>🗑️ </p>
                <p onClick={()=>nav(`/edit/${task.id}`)}> 🖊️ </p>
            </div>

            
        </div>
    )
}

export default TaskItem