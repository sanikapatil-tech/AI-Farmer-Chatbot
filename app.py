from flask import Flask, render_template, request, jsonify
from chatbot import get_response
from database import create_database, save_chat

app = Flask(__name__)
create_database()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    user_message = data.get("message")
    language = data.get("language", "mr")

    bot_response = get_response(user_message, language)

    save_chat(user_message, bot_response, language)

    return jsonify({
        "response": bot_response
    })


if __name__ == "__main__":
    app.run(debug=True)