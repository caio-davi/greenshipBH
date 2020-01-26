#!/usr/bin/env python
from flask import Flask, render_template, make_response, request
from flask_json import FlaskJSON, JsonError, json_response
from flask_cors import CORS
import dbAccess

app = Flask(__name__, instance_relative_config=True)

FlaskJSON(app)
CORS(app)

@app.route('/')
def index():
    if request.method == 'GET':
        return json_response(data = 'test', headers_={'X-STATUS': 'ok'})
    else:
        raise JsonError(description='Invalid value.')

@app.route('/hello')
def hello():
    if request.method == 'GET':
        return json_response(data = 'world', headers_={'X-STATUS': 'ok'})
    else:
        raise JsonError(description='Invalid value.')

@app.route('/ships')
def ships():
    if request.method == 'GET':
        return json_response(data = dbAccess.ships(), headers_={'X-STATUS': 'ok'})
    else:
        raise JsonError(description='Invalid value.')