from flask import Flask
from flask_cors import CORS
from src import API
from markupsafe import escape

app = Flask(__name__)
CORS(app)
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