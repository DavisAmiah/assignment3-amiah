const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("evening-mode");
  toggleBtn.textContent = body.classList.contains("evening-mode")
    ? "Switch to Morning Mode"
    : "Switch to Evening Mode";
});

console.log("hello");
