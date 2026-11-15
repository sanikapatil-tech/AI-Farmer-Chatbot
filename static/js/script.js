// Get Elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Send button click
sendBtn.addEventListener("click", sendMessage);

// Enter key
userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Function
function sendMessage() {

    let message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // User Message
    addMessage(message, "user");

    // Clear Input
    userInput.value = "";

    // Dummy Bot Reply
    setTimeout(() => {

        let reply = getBotReply(message);

        addMessage(reply, "bot");

    }, 700);

}

// Add Message
function addMessage(text, sender) {

    let messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    messageDiv.innerHTML = text;

    chatBox.appendChild(messageDiv);

    // Auto Scroll
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Dummy AI
function getBotReply(message) {

    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "👋 Hello Farmer! How can I help you today?";
    }

    if (message.includes("cotton")) {
        return "🌱 Cotton grows well in black soil with moderate rainfall.";
    }

    if (message.includes("rice")) {
        return "🌾 Rice requires plenty of water and fertile soil.";
    }

    if (message.includes("wheat")) {
        return "🌾 Wheat is usually grown during the Rabi season.";
    }

    if (message.includes("fertilizer")) {
        return "🧪 Use fertilizer based on your soil test report.";
    }

    if (message.includes("thank")) {
        return "😊 You're welcome! Happy Farming.";
    }

    return "🤖 I am your AI Farmer Assistant. Flask AI integration will be added in the next step.";
}