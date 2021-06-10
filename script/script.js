let input = document.querySelector('.todoText');
let addTodoBtn = document.querySelector('.addTodo');
let list = document.querySelector('.todo');
let clearListBtn = document.querySelector('.clearBtn');
let doneTasks = document.querySelector('.doneTask');
let notDoneTasks = document.querySelector('.notDoneTasks')
let allTasks = document.querySelector('.allTasks')


let arrayOfMessages = []

const displayMessages = () => {
    list.innerHTML = ''

    arrayOfMessages.forEach(item => {
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapperMessages'

        const todoTitle = document.createElement('h3')
        todoTitle.innerHTML = item.text
        todoTitle.addEventListener('click', () => {
            console.log('heheheeh')
        })

        wrapper.appendChild(todoTitle)

        list.appendChild(wrapper)
        // const todo = `<div class="wrapperMessages"><h3>${item.text}</h3> <button class="btnDeleteTasks">❌</button></div>`;

        // list.innerHTML += todo
    })

}

addTodoBtn.onclick = () => {
    if (input.value === '') {
        alert('Please enter todo!')
        return
    }

    const todo = {
        text: input.value,
        isDone: false,
    }

    arrayOfMessages.push(todo)
    displayMessages()

    input.value = '';

    //Выполненые задачи.
    doneTasks.onclick = () => {

        list.innerHTML = ''

        let doneTaskEl = ''
        let filterDoneTask = arrayOfMessages.filter(f => f.status === true); console.log(filterDoneTask)
        filterDoneTask.forEach(item => {
            doneTaskEl += `<div class = 'doneWrapperMessages'>
            <h3 class = "">${item.todo}</h3> 
            <button class= 'btnDeleteTasks'>❌</button>
            </div>
            `;

            list.innerHTML = doneTaskEl;
        })
    }

    //Не выполненые задачи.
    notDoneTasks.onclick = () => {
        list.innerHTML = ''

        let notDoneTaskEl = ''
        let filterNotDoneTask = arrayOfMessages.filter(f => f.status === false);
        filterNotDoneTask.forEach(item => {
            notDoneTaskEl += `<div class = "wrapperMessages">
            <h3>${item.todo}</h3>
            <button class= 'btnDeleteTasks'>❌</button>
            <div/>`;

            list.innerHTML = notDoneTaskEl;

        })
    }
    //Все задачи.
    allTasks.onclick = () => {

        list.innerHTML = ''

        let allTasksEl = ''
        arrayOfMessages.forEach(item => {
            allTasksEl += `<div class = "${toDoList.status === true ? 'doneWrapperMessages' : 'wrapperMessages'}">
            <h3>${item.todo}</h3>
            <button class= 'btnDeleteTasks'>❌</button>
            </div>`;
            list.innerHTML = allTasksEl;

        })
    }

    //Удалить задачу.


}




//Очистить все.
clearListBtn.onclick = () => {
    while (arrayOfMessages.length > 0) {
        arrayOfMessages.pop()
    }
    list.innerHTML = ''
}

