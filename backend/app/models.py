from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import UserMixin
from werkzeug.security import generate_password_hash
from app import db, bcrypt

##db = SQLAlchemy()
##bcrypt = Bcrypt()

class User(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    reset_token = db.Column(db.String(255), nullable=True)
    token_expiry = db.Column(db.DateTime, nullable=True)

    def set_password(self,password):
        """Hashes password and stores it"""
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self,password):
            """Checks if password matches stored hash"""
            return bcrypt.check_password_hash(self.password_hash,password)

    def __str__(self):
        return self.email