# DEVCRAFT-MONOPOLY BACKEND
## OVERVIEW
The backend of the Monopoly game provides the server-side logic and data management needed for the gameplay, user authentication, game state, and player interactions. This project is built using Flask, a micro web framework for Python, and it utilizes SQLAlchemy for database management to handle user data, game state, and transactions.

## FEATURES
- User authentication and registration
- Game creation, joining, and management
- Turn-based gameplay logic
- Player money and asset tracking
- Property management (buying, renting, mortgaging)
- Real-time game updates
- Chance and Community Chest cards handling

## TECH STACK
- Backend Framework: Flask
- Database: PostgreSQL 
- Authentication: JWT (JSON Web Token) for secure user authentication
- Real-Time Communication : Flask-SocketIO (for multiplayer support)
- ORM: SQLAlchemy
- Environment Management: venv

 ## Installation
1. Clone the repository
git clone https://github.com/Jane-Njoroge/devcraft-monopoly-backend.git
cd devcraft-monopoly-backend
2. Set up your virtual environment
Ensure you're using Python 3.8+:
python3 -m venv venv
source venv/bin/activate  # For Linux/macOS
venv\Scripts\activate     # For Windows
3. Install dependencies
Install the necessary dependencies using pip:
pipenv install -r requirements.txt
4. Set up environment variables
Create a .env file in the root of the project and add your environment-specific variables:
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key
DATABASE_URI=postgresql://username:password@localhost/monopoly_db
JWT_SECRET_KEY=your-jwt-secret-key
Make sure to replace your-secret-key, your-jwt-secret-key, and database credentials with actual values.

5. Set up the database
Ensure PostgreSQL is running and create the database.
# In PostgreSQL shell
CREATE DATABASE monopoly_db;
Next, run the following command to set up the database schema:
flask db upgrade


## Running the Backend Server
1. Run the Flask Development Server
flask run
2. Testing the API
You can test the API using Postman or curl by making requests to the following endpoints:

POST /auth/register - User registration
POST /auth/login - User login and get JWT token
POST /game/create - Create a new game
POST /game/join - Join an existing game
POST /game/start - Start a game
POST /game/move - Roll the dice and move
POST /game/buy-property - Buy a property
POST /game/pay-rent - Pay rent to other players
GET /game/status - Get current game status (turn, properties, money, etc.)
Game Logic & Endpoints
Authentication & User Management
POST /auth/register: Create a new user.
Request: { "username": "player1", "password": "password" }
Response: { "message": "User registered successfully." }
POST /auth/login: Log in and obtain a JWT token.
Request: { "username": "player1", "password": "password" }
Response: { "token": "jwt-token" }
Game Creation & Joining
POST /game/create: Start a new game session.
Request: { "players": ["player1", "player2", "player3"] }
Response: { "message": "Game created successfully.", "game_id": "abc123" }
POST /game/join: Join an existing game.
Request: { "game_id": "abc123", "username": "player1" }
Response: { "message": "Joined the game successfully." }
Gameplay
POST /game/start: Start the game once all players have joined.
Request: { "game_id": "abc123" }
Response: { "message": "Game started." }
POST /game/move: Roll the dice and move to the next space.
Request: { "game_id": "abc123", "player_id": "player1" }
Response: { "message": "Player moved to space X" }
POST /game/buy-property: Buy a property when landing on it.
Request: { "game_id": "abc123", "player_id": "player1", "property_id": "Park Place" }
Response: { "message": "Property bought successfully." }
POST /game/pay-rent: Pay rent when landing on an owned property.
Request: { "game_id": "abc123", "player_id": "player1", "property_id": "Boardwalk" }
Response: { "message": "Rent paid successfully." }

## Testing
To test the backend, we use Pytest or unittest for unit and integration tests. The tests are located in the tests/ directory.

Run the tests using:
pytest
Sample Test Command
pytest tests/test_game.py

## Contributing
We welcome contributions to improve the Monopoly Backend. If you want to contribute:
- Fork the repository.
- Create a new branch (git checkout -b feature-xyz).
- Make your changes and commit them (git commit -m 'Added feature xyz').
- Push to your branch (git push origin feature-xyz).
- Submit a pull request.

## License
MIT License Copyright (c) 2024 Titus Kipchirchir,Jane Njoroge, Joy Wahome, Ian Kigwa



