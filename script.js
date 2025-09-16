const form = document.getElementById("taskForm");
const taskBoard = document.getElementById("taskBoard");

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents page reload

  const topic = document.getElementById("topicInput").value.trim();
  const task = document.getElementById("taskInput").value.trim();
  const note = document.getElementById("noteInput").value.trim();

  if (!topic || !task) return; // Skip if topic or task is empty

  let topicSection = document.querySelector(`[data-topic="${topic}"]`);

  // If topic section doesn't exist, create it
  if (!topicSection) {
    topicSection = document.createElement("div");
    topicSection.classList.add("topic-section");
    topicSection.setAttribute("data-topic", topic);
    topicSection.innerHTML = `<h2>${topic}</h2>`;
    taskBoard.appendChild(topicSection);
  }

  // Create task item
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <p><strong>${task}</strong></p>
    ${note ? `<p class="note">📝 ${note}</p>` : ""}
    <div class="actions">
      <button class="done-btn">✅</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  // Button to mark task as completed
  taskItem.querySelector(".done-btn").addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Button to delete task
  taskItem.querySelector(".delete-btn").addEventListener("click", () => {
    taskItem.remove();
  });

  // Add task to the corresponding topic section
  topicSection.appendChild(taskItem);

  // Reset form fields
  form.reset();
});
