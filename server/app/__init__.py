#server/app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS


db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app,origins=["https://localhost:5173",'http://127.0.0.1:5000/user'])  

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///properties.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
    # app.json.compact= False

    migrate = Migrate(app, db)
    db.init_app(app)
   
   
    
    from .routes import bp
    app.register_blueprint(bp)
        
    
    with app.app_context():
        db.create_all()
    

    return app




