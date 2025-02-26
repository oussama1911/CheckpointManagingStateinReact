import React, { useState, useContext, useEffect } from 'react'
import { taskContext } from '../context/taskContext'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {

    const { tasks, setTasks } = useContext(taskContext)
    const { id } = useParams()

    const [error, setError] = useState(false)

    const nav = useNavigate()

    useEffect(() => {
        if (id) {
            const task = tasks.find(task => task.id == id)
            setTaskName(task.name)
            setTaskDesc(task.description)
        }
    }, [])


    const [taskName, setTaskName] = useState('')
    const [taskDesc, setTaskDesc] = useState('')



    function handleAdd() {
        const date = new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
        setTasks(prevTasks => [...prevTasks, { id: tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 0, name: taskName, description: taskDesc, done: false ,date: date  }])
    }

    function handleEdit() {

        setTasks(prevTask => prevTask.map(task => task.id == id ? { ...task, name: taskName, description: taskDesc } : task))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskName.length < 6) return setError(true)
        id ? handleEdit(e) : handleAdd()
        nav('/')
    }


    return (
        <div>
            <form action='' className='task-name'>
                <input type='text'
                    placeholder='task name'
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} />
                {error && <p className='error-msg'>name field is required</p>}
                <input type='text'
                    placeholder='task description'
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)} />
                <button className='form-btn' onClick={handleSubmit}>{id ? 'edit' : 'add'}  add task</button>

            </form>
        </div>
    )
}

export default TaskForm