import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'


const TaskItem = ({ task, handleStatusChange, handleDelete }) => {

    const nav = useNavigate()

    return (
        <div className={`task-item ${task.done ? 'task-done' : 'task-pending'}`}>
            <h3> {task.name}</h3>
            <p className='date'>{task.date}</p>
            <p>{task.description}</p>
            <div className='task-btns'>
                <p onClick={() => handleStatusChange(task.id)}>{task.done ? ' ✅' : '🚫'}</p>
                <p onClick={() => handleDelete(task.id)}>🗑️ </p>
                <p onClick={()=>nav(`/edit/${task.id}`)}> 🖊️ </p>
            </div>

        </div>
    )
}

export default TaskItem