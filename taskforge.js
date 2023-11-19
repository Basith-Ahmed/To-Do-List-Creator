const todoList = JSON.parse(localStorage.getItem("todo")) || [];

function keyDown(event) {
  //enter key func
  if (event.key === "Enter") {
    addTodo();
  }
}

function addTodo() {
  //js data array storage
  const taskElement = document.querySelector(".js-input");
  const dateElement = document.querySelector(".js-date");
  const task = taskElement.value;
  const date = dateElement.value;
  todoList.push({ task: task, date: date });
  console.log(todoList);
  localStorage.setItem("todo", JSON.stringify(todoList));
  taskElement.value = "";
  dateElement.value = "";
  renderTodoList();
}
function renderTodoList() {
  //generating html and displaying
  let todoHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const task = todoObject.task;
    const date = todoObject.date;
    const html = 
    `<div style="padding-left: 10px;">${Number(i) + 1} &#8226; ${task}</div>
    <div style="padding-left: 10px;">${date}</div> <button class="btn btn-secondary" onclick="
      console.log(${todoList.length})
      if (${todoList.length} === 1) {
        localStorage.removeItem('todo');
        location.reload(); 
      } else {
        todoList.splice(${i}, 1);
      };
      renderTodoList();
        ">Delete</button>`;
    todoHTML = todoHTML + html;
    document.querySelector(".js-todo-array").innerHTML = todoHTML;
  }
}
