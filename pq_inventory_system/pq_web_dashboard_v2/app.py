from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import pandas as pd
import time
import threading

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

def read_csv():
    """Read data from the CSV file and return it as a list of dictionaries."""
    df = pd.read_csv('commander_masters_boosters_.csv')
    return df.to_dict(orient='records')

def background_thread():
    """Send CSV data to clients every 5 seconds."""
    while True:
        time.sleep(5)
        data = read_csv()
        socketio.emit('update', data)

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    thread = threading.Thread(target=background_thread)
    thread.start()
    socketio.run(app, debug=True)