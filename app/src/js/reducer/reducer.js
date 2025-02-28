import ACTIONS from "../constants/actionTypes";

const initState = JSON.parse(localStorage.getItem('tasks')) || []

function reducer(state = initState, action) {
    switch (action.type) {
        case ACTIONS.CREATE:
            return [...state, action.payload]
        case ACTIONS.EDIT:
            return state.map(task => task.id == action.payload.id ? { ...task, ...action.payload } : task)
        case ACTIONS.DELETE:
            console.log('triggred')
            return state.filter(task => task.id != action.payload)
        case ACTIONS.CHANGE_STATUS:
            return state.map(task => task.id == action.payload ? { ...task, done: !task.done } : task)
        default:
            return state

    }
}

export default reducer