from flask import Flask
from src import API
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
async def index():
    return ''

@app.route("/api/pokemon/<string:param>")
async def get_pokemon(param: str):
    api = API()

    return await api.get_pokemon(escape(param))