const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});

function getTime(){

    const now=new Date();

    return now.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit'
    });

}

function addUserMessage(message){

    chatBox.innerHTML += `

    <div class="message user-message">

        <div class="bubble">

            <div class="name">You</div>

            ${message}

            <div class="time">${getTime()}</div>

        </div>

        <div class="avatar">👩</div>

    </div>

    `;

}

function addBotMessage(message){

    chatBox.innerHTML += `

    <div class="message bot-message">

        <div class="avatar">🤖</div>

        <div class="bubble">

            <div class="name">AI Farmer</div>

            ${message}

            <div class="time">${getTime()}</div>

        </div>

    </div>

    `;

}

function scrollBottom(){

    chatBox.scrollTop=chatBox.scrollHeight;

}

async function sendMessage(){

    const question = input.value.trim();

    if(question==="") return;

    addUserMessage(question);

    input.value="";

    scrollBottom();

    const response = await fetch("/chat",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            message:question
        })

    });

    const data = await response.json();

    addBotMessage(data.response);

    scrollBottom();

}