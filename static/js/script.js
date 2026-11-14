const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);

async function sendMessage() {

    const question = input.value.trim();

    if (question === "") return;

    // User message
    chatBox.innerHTML += `
        <div class="user-message">${question}</div>
    `;

    input.value = "";

    // Send to Flask
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: question
        })
    });

    const data = await response.json();

    // Bot message
    chatBox.innerHTML += `
        <div class="bot-message">${data.response}</div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}