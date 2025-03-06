from flask import Blueprint, render_template, redirect,url_for,flash,jsonify,request

from flask_login import login_user, logout_user, login_required
from app import db, bcrypt
from app.models import User

auth = Blueprint('auth',name)

@auth.route('/signup',methods=['POST'])
def signup():

    data = request.get_json()
    if not data:
        return jsonify({"error":"Invalid json data"}),400
    print("Request data:", data)

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

print("Confirm Password:", confirm_password)


if not all([username,email,password,confirm_password]):
   return jsonify({'error': 'All fields are required'}), 400
        