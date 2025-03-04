##from flask import Flask
##from flask_sqlalchemy import SQLAlchemy
##from flask_bcrypt import Bcrypt
##from flask_login import LoginManager



##app = Flask(__name__)
##app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:5432/monopolydb'
##app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

##initializing the extensions
##db = SQLAlchemy()
##bcrypt = Bcrypt()
##login_manager = LoginManager()

##from models import User


##initializing the app with the extensions
##def create_app():
##db.init_app(app)
##bcrypt.init_app(app)

##login_manager.init_app(app)

##from models import User
##from auth import auth

##register the authentication blueprint
##app.register_blueprint(auth, url_prefix='/auth')

##with app.app_context():
 ##   db.create_all()

##@app.route('/')
##def home():
 ##   return "Hello,Flask is running"


##if __name__ == "__main__":
 ##   app.run(debug=True)

from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
