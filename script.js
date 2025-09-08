const form = document.getElementById("taskForm");
const taskBoard = document.getElementById("taskBoard");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const topic = document.getElementById("topicInput").value.trim();
  const task = document.getElementById("taskInput").value.trim();
  const note = document.getElementById("noteInput").value.trim();

  if (!topic || !task) return;

  let topicSection = document.querySelector(`[data-topic="${topic}"]`);

  if (!topicSection) {
    topicSection = document.createElement("div");
    topicSection.classList.add("topic-section");
    topicSection.setAttribute("data-topic", topic);
    topicSection.innerHTML = `<h2>${topic}</h2>`;
    taskBoard.appendChild(topicSection);
  }

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

  // Botão de concluir
  taskItem.querySelector(".done-btn").addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Botão de excluir
  taskItem.querySelector(".delete-btn").addEventListener("click", () => {
    taskItem.remove();
  });

  topicSection.appendChild(taskItem);
  form.reset();
});
