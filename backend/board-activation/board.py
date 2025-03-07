from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
import random

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://wangui:wangui@localhost:5432/monopoly_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


tokens = ['car', 'dog', 'hat', 'ship', 'thimble', 'cat', 'boot', 'iron']  

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    balance = db.Column(db.Integer, default=1500)
    position = db.Column(db.Integer, default=0)
    token = db.Column(db.String(50), nullable=False)

def create_tables():
    with app.app_context():
        db.create_all()


@app.route('/player', methods=['POST'])
def create_player():
    data = request.json
    new_player = Player(name=data['name'], token=tokens[len(Player.query.all()) % len(tokens)])
    db.session.add(new_player)
    db.session.commit()
    return jsonify({"message": "Player created!", "player": {"name": new_player.name, "balance": new_player.balance, "token": new_player.token}}), 201


@app.route('/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    return jsonify([{
        "id": p.id, 
        "name": p.name, 
        "balance": p.balance, 
        "position": p.position,
        "token": p.token  
    } for p in players])


@app.route('/roll_dice/<int:player_id>', methods=['POST'])
def roll_dice(player_id):
    dice1, dice2 = random.randint(1, 6), random.randint(1, 6)
    total_move = dice1 + dice2
    player = Player.query.get(player_id)
    
    if not player:
     return jsonify({"error": "Player not found"}), 404
    
   
    player.position = (player.position + total_move) % 40 
    db.session.commit()
    
   
    return jsonify({
        "message": "Dice rolled",
        "dice": [dice1, dice2],
        "new_position": player.position,
        "token": player.token
    })


@app.route('/buy_property', methods=['POST'])
def buy_property():
    data = request.json
    player = Player.query.get(data['player_id'])
    price = data['price']
    
    if not player or player.balance < price:
        return jsonify({"error": "Not enough balance or player not found"}), 400
    
    player.balance -= price
    db.session.commit()
    
    return jsonify({"message": "Property purchased", "new_balance": player.balance})


@app.route('/pay_rent', methods=['POST'])
def pay_rent():
    data = request.json
    payer = Player.query.get(data['payer_id'])
    owner = Player.query.get(data['owner_id'])
    rent = data['rent']
    
    if not payer or not owner or payer.balance < rent:
        return jsonify({"error": "Invalid transaction"}), 400
    
    payer.balance -= rent
    owner.balance += rent
    db.session.commit()
    
    return jsonify({
        "message": "Rent paid",
        "payer_balance": payer.balance,
        "owner_balance": owner.balance
    })

if __name__ == '__main__':
    create_tables()
    app.run(debug=True)
