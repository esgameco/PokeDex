from flask import Flask
from src import API

app = Flask(__name__)

@app.route("/")
async def index():
    api = API()
    data = await api.get_pokemon('ditto')

    return data