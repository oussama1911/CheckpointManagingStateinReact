import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskProvider from './context/taskContext'
import { Routes, Route } from 'react-router'
import { changeStatus, createTask, deleteTask, editTask } from './js/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {

  const tasks = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleCreate(task) {
    dispatch(createTask(task))
  }
  function handleEdit(task) {
    dispatch(editTask(task))
  }
  function handleStatusChange(id){
    dispatch(changeStatus(id))
  }
  function handleDelete(id){
    dispatch(deleteTask(id))

  }

  return (
    <>
      <TaskProvider>
        <Routes>
          <Route index element={<TaskList handleDelete={handleDelete} handleStatusChange={handleStatusChange} tasks={tasks} />} />
          <Route path='/add' element={<TaskForm handleCreate={handleCreate} handleEdit={handleEdit} tasks={tasks}/>} />
          <Route path='/edit/:id' element={<TaskForm  handleCreate={handleCreate} handleEdit={handleEdit} tasks={tasks}/>} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App
