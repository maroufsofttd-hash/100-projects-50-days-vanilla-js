const input = document.getElementById("input");
const prioritySelect = document.getElementById("priority");
const addBtn = document.getElementById("btn");
const todoList = document.getElementById("todo-list");
const para = document.querySelector(".para");
const itemsLeft = document.getElementById("items-left");
const clearCompleted = document.getElementById("clear-completed");
const taskCountBadge = document.getElementById("task-count");

const btnTous = document.getElementById("tous");
const btnUrgente = document.getElementById("urgente");
const btnMoyenne = document.getElementById("moyenne");
const btnBasse = document.getElementById("basse");

let tasks = [];
let currentFilter = "all";

const priorityLabels = { ur: "Urgente", mo: "Moyenne", bs: "Basse" };

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }
  todo.push({
    id: Date.now(),
    text,
    priority: prioritySelect.value,
    done: false,
  });
  input.value = "";
  input.focus();
}
