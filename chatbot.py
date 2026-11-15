def get_response(user_message):

    user_message = user_message.lower()

    if "hello" in user_message or "hi" in user_message:
        return "Hello Farmer! 👋 How can I help you today?"

    elif "wheat" in user_message:
        return "Wheat grows best in cool weather with well-drained soil."

    elif "rice" in user_message:
        return "Rice requires plenty of water and fertile soil."

    elif "fertilizer" in user_message:
        return "Please tell me the crop name so I can recommend a fertilizer."

    elif "weather" in user_message:
        return "Weather API will be integrated in the next version."

    else:
        return "Sorry, I don't understand. Gemini AI will answer this in the next version."