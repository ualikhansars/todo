export const showSlots = (showSlots) =>{
    return {
        type: 'SHOW_SLOTS',
        payload: showSlots
    }
}

export const showSettings = (showSettings) => {
    return {
        type: "SHOW_SETTINGS",
        payload: showSettings
    }
}

export const showTodoControllers = (showTodoControllers) => {
    return {
        type: 'SHOW_TODO_CONTROLLERS',
        payload: showTodoControllers
    }
}

export const hideAll = (showSettings, showSlots, showTodoControllers) => {
    return {
        type: 'HIDE_ALL',
        showSettings,
        showSlots,
        showTodoControllers
    }
}