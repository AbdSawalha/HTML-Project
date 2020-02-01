
function loadTasks(taskList) {
    let container = document.getElementById('taskContainer');
    container.innerHTML = '';

    taskList.forEach((task, i) => {
        if (task.img == null && task != null) {
            if (task.completed) {
                task.img = 'https://picsum.photos/1600/900?v1';
            }
            else {
                task.img = 'https://picsum.photos/1600/900';
            }
        }
        if (task.description == "This is my new task") {
            debugger
            task.createdOn=new Date();
            task.dueDate=new Date("01/01/2018");
            task.completed = false;
        }
        let divTask = document.createElement('div');
        divTask.className = "taskCard";
        divTask.innerHTML = '';
        divTask.innerHTML = `
        <div class='row'>
        <div class='col-md-2'>
        ${task.img ? "<img src='" + task.img + "' class='img-task'/>" : ""}
        </div>
        <div class='col-md-10'>
        <h4> <input type="checkbox" ${task.completed ? "checked" : ""} title="check completed">  ${task.title + ' ' + i}</h4>
        <span>created on ${task.createdOn} by ${task.createdBy}</span>
        <p>${task.description}</p>
        <span>Due on ${task.dueDate}</span>
        </div>   
        </div>
        `;

        if (task.completed)
            divTask.classList.add("taskCompleted");
        else if (task.dueDate < Date.now())
            divTask.classList.add("taskLate");


        container.appendChild(divTask);
    });
}


loadTasks(taskList);


function addTask(task) {
    debugger
    taskList.unshift(task);
    loadTasks(taskList);
}