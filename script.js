// Select DOM elements
const addBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Also add task when pressing Enter
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Buttons container
  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  // ✔ Complete button
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerHTML = "✔";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // ✖ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "✖";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Add buttons to actions div
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  // Build list item
  li.appendChild(span);
  li.appendChild(actions);

  // Add to task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
