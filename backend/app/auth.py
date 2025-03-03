from flask import Blueprint, request, jsonify
##from werkzeug.security import generate_password_hash
from app.models import db, User
##import sys
##import os
##sys.path.append(os.path.abspath(os.path.dirname(__file__)))


auth = Blueprint('auth',__name__)

@auth.route('signup',methods=['POST'])
def signup():
    data = request.get_json()
    print("Received Data:",data)

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')


    if not all([username,email,password,confirm_password]):
        return jsonify({"error":"All fields are required"}),400
    
    if password != confirm_password:
        return jsonify({"error":"Passwords do not match"}),400
    

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error":"Email already exists"}),400
    
    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message":"User registered successfully!"}),201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Received Data:",data)
    
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"error": "Invalid email or password"}), 401