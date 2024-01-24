from app.models.user_model import User
from flask import request, jsonify 
from app import db
from sqlalchemy.exc import SQLAlchemyError
import logging


logging.basicConfig(level=logging.INFO)

def handle_error(e, status_code):
    logging.error(str(e))
    return jsonify({'error' : str(e)}), status_code

def create_user():
    try:
        data = request.get_json()

        if 'username' not in data or 'password' not in data :
            return handle_error('missing data fields', 400)
        
        user= User(username=data['username'],password=data['password'])

        db.session.add(user)
        db.session.commit()
        logging.info(jsonify(user.serialize()))
        return jsonify(user.serialize()), 201
    except SQLAlchemyError as e:
        return handle_error (e, 500)
    
def get_users():
    try:
        users= User.query.all()
        return jsonify ([user.serialize()for user in users]),200
    
    except SQLAlchemyError as e:
        return handle_error(e, 400)
    
def get_user(id):
    try:
        user= User.query.filter_by(id=id).first()
        return jsonify ([user.serialize()])
    except SQLAlchemyError as e:
        return handle_error(e, 400)
    
def update_user(id):
    try:
        user= User.query.get(id)
        username= request.json['username']
        password = request.json['password']

        user.username= username
        user.password= password

        db.session.commit()
        return jsonify ('updated successfully'), 201


    except SQLAlchemyError as e:
        return handle_error( e , 400)

    
def delete_user(id):
    try:
        user= User.query.get(id)
        db.session.delete(user)
        db.session.commit()
        return jsonify("user deleted successfully")
    except  SQLAlchemyError as e:
        return handle_error(e, 400)




