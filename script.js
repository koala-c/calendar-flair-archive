const oldFlairs = [
  { name: "Tomato", color: "#d93025" },
  { name: "Tangerine", color: "#f6bf26" },
  { name: "Banana", color: "#f4b400" },
  { name: "Sage", color: "#33b679" },
  { name: "Basil", color: "#0b8043" },
  { name: "Peacock", color: "#039be5" },
  { name: "Blueberry", color: "#3f51b5" },
  { name: "Lavender", color: "#7986cb" },
  { name: "Grape", color: "#8e24aa" },
  { name: "Flamingo", color: "#e67c73" }
];

const newFlairs = [
  { name: "Coral", color: "#ff6b6b" },
  { name: "Mango", color: "#ff9f1a" },
  { name: "Sunflower", color: "#fbc531" },
  { name: "Mint", color: "#2ed573" },
  { name: "Evergreen", color: "#1e9a5a" },
  { name: "Sky", color: "#2f8dff" },
  { name: "Indigo", color: "#4a54d8" },
  { name: "Lilac", color: "#b28dff" },
  { name: "Violet", color: "#8c52ff" },
  { name: "Rose", color: "#ff7aa2" }
];

const oldGrid = document.getElementById("old-grid");
const newGrid = document.getElementById("new-grid");
const oldCount = document.getElementById("old-count");
const newCount = document.getElementById("new-count");
const toggles = Array.from(document.querySelectorAll(".toggle"));

function flairCard({ name, color }, type) {
  const article = document.createElement("article");
  article.className = "flair";
  article.innerHTML = `
    <div class="swatch" style="background:${color}"></div>
    <div class="label">${name}</div>
    <span class="chip">${type}</span>
  `;
  return article;
}

function renderGrid(target, list, label) {
  target.innerHTML = "";
  list.forEach((item) => target.appendChild(flairCard(item, label)));
}

function applyFilter(filter) {
  const showOld = filter === "all" || filter === "old";
  const showNew = filter === "all" || filter === "new";

  oldGrid.parentElement.style.display = showOld ? "block" : "none";
  newGrid.parentElement.style.display = showNew ? "block" : "none";

  toggles.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
}

renderGrid(oldGrid, oldFlairs, "old");
renderGrid(newGrid, newFlairs, "new");
oldCount.textContent = `${oldFlairs.length} items`;
newCount.textContent = `${newFlairs.length} items`;

toggles.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

applyFilter("all");
