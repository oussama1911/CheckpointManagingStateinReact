import ACTIONS from "../constants/actionTypes"

export function createTask(task) {
    return {
        type: ACTIONS.CREATE,
        payload: task
    }
}

export function editTask(task) {
    return {
        type: ACTIONS.EDIT,
        payload: task
    }
}

export function deleteTask(id) {
    return {
        type: ACTIONS.DELETE,
        payload: id
    }
}

export function changeStatus(id) {
    return {
        type: ACTIONS.CHANGE_STATUS,
        payload: id
    }
}

