// Get the input and output elements
var inputElement = document.getElementById("chat-input");
var outputElement = document.getElementById("chat-output");

// Add an event listener to the input element
inputElement.addEventListener("keyup", function(event) {
  // Check if the user pressed the "Enter" key
  if (event.keyCode === 13) {
    // Get the user input
    var userInput = inputElement.value;

    // Send the user input to the chatbot API for processing
    fetch("/chatbot-api", {
      method: "POST",
      body: JSON.stringify({ input: userInput }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      // Display the chatbot's response in the output element
      outputElement.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
      outputElement.innerHTML += "<p><strong>Chatbot:</strong> " + data.response + "</p>";

      // Clear the input field
      inputElement.value = "";
    });
  }
});
