import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/shopsdata', methods=['GET'])
def get_data():
    with open('../assets/data/shopsData.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

# read menuitems.json file
@app.route('/orderhistory', methods=['GET'])
def get_menuitems():
    with open('../assets/data/orders.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/order', methods=['POST'])
def add_order():
    try:
        new_order = request.json
        with open('../assets/data/orders.json', 'r') as f:
            data = json.load(f)
        data[new_order['id']] = new_order
        with open('../assets/data/orders.json', 'w') as f:
            json.dump(data, f)
        return jsonify({"message": "Order placed successfully", 'data':data}), 201
    except Exception as e:
        return jsonify({"message": "Error occurred", 'error': str(e)}), 400

@app.errorhandler(404)
def not_found(e):
    return jsonify({"message": "Resource not found"}), 404
if __name__ == '__main__':
    app.run(debug=True)