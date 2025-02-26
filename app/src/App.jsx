
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskProvider from './context/taskContext'
import {Routes , Route} from 'react-router'

function App() {
  

  return (
    <>
    
    <TaskProvider>
    <Routes> 
      <Route index element={<TaskList/>}/>
      <Route path='/add' element={<TaskForm/>}/>
      <Route path='/edit/:id' element={<TaskForm/>}/>

    </Routes>
    </TaskProvider>
      
    </>
  )
}

export default App
