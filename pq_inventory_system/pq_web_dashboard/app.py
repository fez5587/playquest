from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('pq_database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM spreadsheet').fetchall()
    conn.close()
    return render_template('index.html', rows=rows)

@app.route('/update', methods=['POST'])
def update():
    data = request.json
    conn = get_db_connection()
    conn.execute('UPDATE spreadsheet SET column1 = ?, column2 = ?, column3 = ? WHERE id = ?',
                 (data['column1'], data['column2'], data['column3'], data['id']))
    conn.commit()
    conn.close()
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(debug=True)