const task = ['Lavar louça']

const addNewTask = () => {
    const newTask = process.argv[2]
    task.push(newTask)
    return task
}

console.table(addNewTask())