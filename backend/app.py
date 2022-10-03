from flask import Flask, Response, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return "Welcome to Pekanu Compute Engine"

# -----------create other routes below-----------------

if __name__ == '__main__':
    app.run()