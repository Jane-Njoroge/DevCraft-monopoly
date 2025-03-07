from flask import Blueprint, render_template, redirect, url_for, flash, jsonify, request
from flask_login import login_user, logout_user, login_required
from app import db, bcrypt
from app.models import User

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid json data"}), 400
    print("Request data:", data)

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

    print("Confirm Password:", confirm_password)

    if not all([username, email, password, confirm_password]):
        return jsonify({'error': 'All fields are required'}), 400

    # Add further logic here for handling the signup process
    # For example:
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match'}), 400

    # Check if user exists
    user_exists = User.query.filter_by(username=username).first()
    if user_exists:
        return jsonify({'error': 'Username already exists'}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user
    new_user = User(username=username, email=email, password=hashed_password)

    # Add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201
