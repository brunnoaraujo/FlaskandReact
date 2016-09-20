from flask import Flask, render_template, request

app = Flask(__name__)

Nomes=['Brunno', 'Alice']

@app.route('/')
def index():
    return render_template('index.html', Nomes=Nomes)


if __name__ == '__main__':
    app.run(debug=True)
