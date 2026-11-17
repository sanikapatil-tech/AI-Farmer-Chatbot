import sqlite3

DATABASE = "data/farmer_chat.db"


def create_database():

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS chat_history (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        question TEXT NOT NULL,

        answer TEXT NOT NULL,

        language TEXT NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)

    conn.commit()
    conn.close()


def save_chat(question, answer, language):

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    cursor.execute("""

        INSERT INTO chat_history
        (question, answer, language)

        VALUES (?, ?, ?)

    """, (question, answer, language))

    conn.commit()
    conn.close()