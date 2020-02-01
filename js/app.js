
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
        let divTask = document.createElement('div');
        if (task.title == "My New Task!") {
            task.createdOn=new Date();
            task.dueDate=new Date("01/01/2018");
            task.completed = false;
            if(task.createdBy==null){
                task.createdBy="Employee";
            }
            divTask.className = "taskCard Task-New";
        }
        else{
            divTask.className = "taskCard";
        }
        
        divTask.innerHTML = '';
        divTask.innerHTML = `
        <div class='row'>
        <div class='col-md-2'>
        ${task.img ? "<img src='" + task.img + "' class='img-task'/>" : ""}
        </div>
        <div class='col-md-10'>
        <h4> <input type="checkbox" ${task.completed ? "checked" : ""} title="check completed">  ${task.title + ' ' + i}</h4>
        <span>created on ${GetDateTime(task.createdOn)} by ${task.createdBy}</span>
        <p>${task.description}</p>
        <span>Due on ${GetDate(task.dueDate)}</span>
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

function GetDateTime(date){
    var newDate=new Date(date);
    return newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate() +" " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
}
function GetDate(date){
    var newDate=new Date(date);
    return newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate() ;
}
function addTask(task) {
    debugger
    taskList.unshift(task);
    loadTasks(taskList);
}