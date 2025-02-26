import React, {  createContext, useEffect } from "react";
import { useState } from "react";

export const taskContext = createContext()

const TaskProvider = ({children}) => {

    const [tasks, setTasks ] = useState(JSON.parse(localStorage.getItem('tasks')) ?? [])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    return(
        <taskContext.Provider value={{tasks,setTasks}}>
            {children}
        </taskContext.Provider>
    )
}

export default TaskProvider