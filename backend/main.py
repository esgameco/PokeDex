import os
from flask import Flask, send_from_directory
from flask_cors import CORS
from src import API
from markupsafe import escape

app = Flask(__name__)
CORS(app)
api = API()


@app.route("/")
async def index():
    return ""


@app.route("/docs/")
async def docs_base():
    return send_from_directory(os.path.join(os.getcwd(), 'backend', 'build', 'docs'), 'index.html')


@app.route("/docs/<path:path>")
async def docs(path):
    if path[-1] == '/' or not path:
        return send_from_directory(os.path.join(os.getcwd(), 'backend', 'build', 'docs'), path + 'index.html')
    return send_from_directory(os.path.join(os.getcwd(), 'backend', 'build', 'docs'), path)


@app.route("/api/pokemon/<string:param>")
async def get_pokemon(param: str):
    res = await api.get_pokemon(param)
    return api.add_status(res)


@app.route("/api/ability/<string:param>")
async def get_ability(param: str):
    res = await api.get_ability(param)
    return api.add_status(res)