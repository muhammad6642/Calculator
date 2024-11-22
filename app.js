// Toggle between dark and light mode
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});

// Letter to Number Conversion (Based on Given Mapping)
const letterToNumberMap = {
  A: 2,
  B: 2,
  C: 2,
  D: 3,
  E: 3,
  F: 3,
  G: 4,
  H: 4,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 6,
  N: 6,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 8,
  U: 8,
  V: 8,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
};

document.getElementById("convertButton").addEventListener("click", () => {
  const input = document
    .getElementById("inputField")
    .value.toUpperCase()
    .trim();

  if (input === "") {
    showToast("Please enter a value.", "error");
    return;
  }

  const expression = input
    .split("")
    .map((letter) => letterToNumberMap[letter] || letter)
    .join("");

  const result = evaluateExpression(expression);

  document.getElementById("resultText").innerText =
    result || "Result will show here...";

  // Success Notification
  showToast("Conversion Successful!", "success");
});

// Function to evaluate expression following BODMAS rules
function evaluateExpression(expression) {
  try {
    // Use eval carefully in a real-world scenario
    return eval(expression);
  } catch (e) {
    // Error Notification
    showToast("Error in expression!", "error");
    return "Error in expression";
  }
}

// Toggle BODMAS operations
document.getElementById("bodmasButton").addEventListener("click", () => {
  const bodmasOperations = document.getElementById("bodmasOperations");
  bodmasOperations.style.display =
    bodmasOperations.style.display === "none" ? "block" : "none";
});

// Function to add to expression
function addToExpression(operator) {
  const inputField = document.getElementById("inputField");
  inputField.value += ` ${operator} `;
  inputField.focus();
}

// Function to show Toast Notifications
function showToast(message, type) {
  Toastify({
    text: message,
    duration: 3000,
    position: "center",
    backgroundColor:
      type === "success"
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : "linear-gradient(to right, #ff5f6d, #ffc371)",
  }).showToast();
}
