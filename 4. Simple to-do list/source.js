document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a valid task!");
    return;
  }

  let taskList = document.getElementById("taskList");

  let li = document.createElement("li");
  li.textContent = taskValue;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    removeTask(taskValue, li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  saveTask(taskValue);

  taskInput.value = "";
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      removeTask(task, li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function removeTask(task, listItem) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  listItem.remove();
}
