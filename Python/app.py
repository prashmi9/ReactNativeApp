import json
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/shopsdata', methods=['GET'])
def get_data():
    with open('../assets/data/shops.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

# read menuitems.json file
@app.route('/menuitemsdata', methods=['GET'])
def get_menuitems():
    with open('../assets/data/menuitems.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)