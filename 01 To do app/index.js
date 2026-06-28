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

/* ── Add task ── */
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
  tasks.push({
    id: Date.now(),
    text,
    priority: prioritySelect.value,
    done: false,
  });
  input.value = "";
  input.focus();
  render();
}

/* ── Filters ── */
btnTous.addEventListener("click", () => setFilter("all"));
btnUrgente.addEventListener("click", () => setFilter("ur"));
btnMoyenne.addEventListener("click", () => setFilter("mo"));
btnBasse.addEventListener("click", () => setFilter("bs"));

function setFilter(f) {
  currentFilter = f;
  [btnTous, btnUrgente, btnMoyenne, btnBasse].forEach((b) =>
    b.classList.remove("active"),
  );
  ({ all: btnTous, ur: btnUrgente, mo: btnMoyenne, bs: btnBasse })[
    f
  ].classList.add("active");
  render();
}

/* ── Clear completed ── */
clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter((t) => !t.done);
  render();
});

/* ── Render ── */
function render() {
  const visible =
    currentFilter === "all"
      ? tasks
      : tasks.filter((t) => t.priority === currentFilter);

  todoList.innerHTML = "";

  visible.forEach((task) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (task.done ? " done" : "");
    li.innerHTML = `
      <label class="checkbox-container">
        <input type="checkbox" class="todo-checkbox" ${task.done ? "checked" : ""} />
        <span class="checkmark"></span>
      </label>
      <span class="todo-item-text">${escapeHtml(task.text)}</span>
      <span class="priority-badge priority-${task.priority}">${priorityLabels[task.priority]}</span>
      <button class="delete-btn" aria-label="Supprimer la tâche">
        <i class="fas fa-times"></i>
      </button>
    `;

    li.querySelector(".todo-checkbox").addEventListener("change", () => {
      task.done = !task.done;
      render();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      render();
    });

    todoList.appendChild(li);
  });

  para.classList.toggle("hidden", visible.length > 0);

  const countAll = tasks.length;
  const countUr = tasks.filter((t) => t.priority === "ur").length;
  const countMo = tasks.filter((t) => t.priority === "mo").length;
  const countBs = tasks.filter((t) => t.priority === "bs").length;

  btnTous.textContent = `Toutes (${countAll})`;
  btnUrgente.textContent = `Urgentes (${countUr})`;
  btnMoyenne.textContent = `Moyennes (${countMo})`;
  btnBasse.textContent = `Basses (${countBs})`;

  const remaining = tasks.filter((t) => !t.done).length;
  itemsLeft.textContent = `${remaining} restante${remaining !== 1 ? "s" : ""}`;

  if (taskCountBadge) {
    taskCountBadge.textContent = `${countAll} tâche${countAll !== 1 ? "s" : ""}`;
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

render();
