const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

// Send message when Send button is clicked
sendButton.addEventListener("click", () => {
  sendMessage();
});

// Send message when Enter key is pressed
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = chatInput.value.trim();
  if (userInput !== "") {
    displayMessage(userInput, "sent");
    setTimeout(() => {
      const response = generateResponse(userInput);
      displayTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        displayMessage(response, "received");
      }, 1500);
    }, 1000);
    chatInput.value = "";
  }
}

function generateResponse(userInput) {
  const responses = [
    "Pee",
    "Poo",
  ];
  const responseLength = Math.floor(Math.random() * (userInput.length + 1));
  let response = "";
  for (let i = 0; i < responseLength; i++) {
    response += responses[Math.floor(Math.random() * responses.length)] + " ";
  }
  return response;
}

function displayMessage(message, messageType) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", messageType);
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function displayTypingIndicator() {
  const typingIndicator = document.createElement("div");
  typingIndicator.classList.add("message", "received");
  typingIndicator.innerHTML = `
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.querySelector(".typing-indicator");
  if (typingIndicator) {
    typingIndicator.parentElement.remove();
  }
}
