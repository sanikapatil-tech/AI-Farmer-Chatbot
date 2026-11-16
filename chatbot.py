import json


with open("data/knowledge.json", "r", encoding="utf-8") as file:
    knowledge = json.load(file)


def get_response(message, language):

    message = message.lower()

    for crop in knowledge.values():

        for keyword in crop["keywords"]:

            if keyword.lower() in message:

                return crop[language]

    if language == "mr":
        return "क्षमस्व 🙏, माझ्याकडे या प्रश्नाचे उत्तर सध्या उपलब्ध नाही."

    elif language == "hi":
        return "क्षमा करें 🙏, मेरे पास इस प्रश्न का उत्तर अभी उपलब्ध नहीं है."

    else:
        return "Sorry 🙏, I don't have an answer for this question yet."