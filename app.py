from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load data
data = pd.read_csv('brent_oil_prices.csv')
data['Date'] = pd.to_datetime(data['Date'])

@app.route('/api/data', methods=['GET'])
def get_data():
    result = data.to_dict(orient='records')
    return jsonify(result)

@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    metrics = {
        'train_rmse': 100,  
        'test_rmse': 200,   
        'test_mae': 75,     
        'train_mae': 50,    
        'train_r2': 0.9,    
        'test_r2': 0.85     
    }
    return jsonify(metrics)

if __name__ == '__main__':
    app.run(debug=True)