from flask import Flask
from src import API
from markupsafe import escape

app = Flask(__name__)
api = API()

@app.route("/")
async def index():
    return ""


@app.route("/api/pokemon/<string:param>")
async def get_pokemon(param: str):
    return await api.get_pokemon(param, use_status=True)


@app.route("/api/ability/<string:param>")
async def get_ability(param: str):
    return await api.get_ability(param, use_status=True)