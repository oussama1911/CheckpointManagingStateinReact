import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = ({ handleCreate, handleEdit, tasks }) => {

    const { id } = useParams()

    const [error, setError] = useState(false)
    const [taskName, setTaskName] = useState('')
    const [taskDesc, setTaskDesc] = useState('')

    const nav = useNavigate()

    // Fetch task data if we are editing an existing task
    useEffect(() => {
        if (id) {
            const task = tasks.find(task => task.id == id) // Make sure to compare ids properly (check type and value)
            if (task) {
                setTaskName(task.name)
                setTaskDesc(task.description)
            }
        }
    }, [id, tasks]) // Add tasks and id as dependencies to re-run if either change

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate that taskName is not empty
        if (taskName.trim().length < 1) {
            setError(true)
            return
        }

        const newTask = {
            id: Math.floor(Math.random() * 100000), // Random ID for new tasks
            name: taskName,
            description: taskDesc,
            date: new Date().toLocaleDateString(),
            done: false
        }

        const updatedTask = {
            id: id,
            name: taskName,
            description: taskDesc,
        }

        // Call the appropriate function based on whether we're creating or editing
        if (id) {
            handleEdit(updatedTask)  // If task exists, edit it
        } else {
            handleCreate(newTask)   // Otherwise, create a new task
        }

        nav('/') // Navigate back to the home page
    }

    return (
        <div className='form-container'>
            <form action='' className='task-name'>
                <input
                    type='text'
                    placeholder='task name'
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                {error && <p className='error-msg'>Name field is required</p>}
                <input
                    type='text'
                    placeholder='task description'
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                />
                <button className='form-btn' onClick={handleSubmit}>
                    {id ? 'Edit Task' : 'Add Task'}
                </button>
            </form>
        </div>
    )
}

export default TaskForm
