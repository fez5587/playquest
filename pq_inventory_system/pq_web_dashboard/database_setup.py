import sqlite3

def setup_database():
    conn = sqlite3.connect('pq_database.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS spreadsheet (
            id INTEGER PRIMARY KEY,
            column1 TEXT,
            column2 TEXT,
            column3 TEXT
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    setup_database()