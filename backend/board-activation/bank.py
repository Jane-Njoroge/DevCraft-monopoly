from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
import os  

app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://wangui:wangui@localhost:5432/monopoly_db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    balance = db.Column(db.Integer, default=1500)
    position = db.Column(db.Integer, default=0)

    def __repr__(self):  
        return f"<Player(id={self.id}, name='{self.name}', balance={self.balance}, position={self.position})>"


def create_tables():
    with app.app_context():
        db.create_all()

@app.route('/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    player_list = [{"id": p.id, "name": p.name, "balance": p.balance, "position": p.position} for p in players]
    return jsonify(player_list)

@app.route('/players/<int:player_id>', methods=['GET'])
def get_player(player_id):
    player = Player.query.get(player_id)
    if player:
        return jsonify({"id": player.id, "name": player.name, "balance": player.balance, "position": player.position})
    return jsonify({"error": "Player not found"}), 404


@app.route('/players', methods=['POST'])
def create_player():
    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({"error": "Name is required"}), 400
    
    new_player = Player(name=name)
    db.session.add(new_player)
    db.session.commit()
    return jsonify({"id": new_player.id, "name": new_player.name, "balance": new_player.balance, "position": new_player.position}), 201

@app.route('/players/<int:player_id>/balance', methods=['PUT'])
def update_balance(player_id):
    player = Player.query.get(player_id)
    if not player:
        return jsonify({"error": "Player not found"}), 404

    data = request.get_json()
    amount = data.get('amount')
    if amount is None:
        return jsonify({"error": "Amount is required"}), 400

    try:
        amount = int(amount) 
    except ValueError:
        return jsonify({"error": "Invalid amount"}), 400

    player.balance += amount
    db.session.commit()
    return jsonify({"id": player.id, "name": player.name, "balance": player.balance, "position": player.position})


if __name__ == '__main__':
    create_tables()
    app.run(debug=True)
