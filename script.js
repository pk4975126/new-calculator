document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".Display");
  const keys = document.querySelectorAll(".key");

  let currentInput = "";

  // Mouse click support
  keys.forEach(key => {
    key.addEventListener("click", () => handleInput(key.textContent.trim()));
  });

  // Keyboard support
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
      // Numbers and operators
      currentInput += key;
      display.textContent = currentInput;
    } else if (key === "Enter") {
      // Calculate result
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else if (key === "Backspace") {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput;
    } else if (key.toLowerCase() === "c") {
      // Clear input (press 'c')
      currentInput = "";
      display.textContent = "";
    }
  });

  // Function to handle both click & keyboard
  function handleInput(value) {
    if (value === "AC") {
      currentInput = "";
      display.textContent = "";
    } else if (value === "DEl") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput;
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  }
});