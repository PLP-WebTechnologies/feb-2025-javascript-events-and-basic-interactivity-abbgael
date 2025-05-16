// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverText").addEventListener("mouseover", () => {
  document.getElementById("hoverText").style.color = "blue";
});

document.getElementById("keypressInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Secret double-click activated!");
});

// Interactive Elements
document.getElementById("colorChanger").addEventListener("click", function () {
  this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Simple Image Gallery
const images = [
  "https://via.placeholder.com/300/FF0000",
  "https://via.placeholder.com/300/00FF00",
  "https://via.placeholder.com/300/0000FF"
];
let currentImg = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImg];
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    const target = document.getElementById(tab.dataset.content);
    target.classList.add("active");
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let valid = true;

  // Email Validation
  if (!email.value.includes("@")) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!valid) {
    event.preventDefault();
  }
});

// Real-time feedback
document.getElementById("password").addEventListener("input", function () {
  const passwordError = document.getElementById("passwordError");
  if (this.value.length < 8) {
    passwordError.textContent = "Too short!";
  } else {
    passwordError.textContent = "";
  }
});
