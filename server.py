
import random
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect, url_for, session
app = Flask(__name__, static_url_path='/static')

services = {
    1: "Single Color Set",
    2: "Recreation Set",
    3: "French Set",
    4: "Fill",
    5: "Freestyle Set",
    6: "Overlay",
    7: "Model Set"
}

# ROUTES
@app.route('/')
def welcome():
    return render_template('welcome.html')


if __name__ == '__main__':
   app.run(debug = True)