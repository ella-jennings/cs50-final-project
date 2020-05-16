import flask

app = flask.Flask(__name__, template_folder="static/templates")

@app.route('/')
def index():
    return flask.render_template("index.html", token="Hello react")

app.run(debug=True)