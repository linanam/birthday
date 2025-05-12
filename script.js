let textItems = [];

// Fetch data from JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    textItems = data.textItems;
    document.getElementById("output").textContent =
      "Click the button to generate text";
  })
  .catch((error) => {
    console.error("Error loading data:", error);
    document.getElementById("output").textContent = "Error loading text data";
  });

// Generate random text
function generateText() {
  if (textItems.length === 0) {
    document.getElementById("output").textContent = "Text data not loaded yet";
    return;
  }
  const randomIndex = Math.floor(Math.random() * textItems.length);
  document.getElementById("output").textContent = textItems[randomIndex];
}

// Event listener
document.getElementById("generate-btn").addEventListener("click", generateText);
