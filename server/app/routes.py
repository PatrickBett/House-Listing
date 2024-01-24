from flask import Blueprint
from app.controllers.user_controller import create_user, get_users, get_user, update_user, delete_user
from app.controllers.house_controller import create_house, get_houses, get_house, update_house, delete_house
from app.controllers.review_controller import create_review, get_reviews, get_review, update_review, delete_review

bp = Blueprint('bp', __name__)


@bp.route('/')
def home():
    return '<h1>Home</h1>'
# crud for users
@bp.route('/user', methods=['POST'])
def add_user():
    return create_user()

@bp.route('/user', methods=['GET'])
def getusers():
    return get_users()

@bp.route('/user/<int:id>')
def getuser(id):
    return get_user(id)

@bp.route('/user/<int:id>', methods=['PUT', 'PATCH'])
def updated_user(id):
    return update_user(id)

@bp.route('/user/<int:id>', methods=['DELETE'])
def deleted_user(id):
    return delete_user(id)

#crud operations for houses

@bp.route('/house', methods=['POST'])
def add_house():
    return create_house()

@bp.route('/house' )
def gethouses():
    return get_houses()

@bp.route('/house/<int:id>' )
def gethouse(id):
    return get_house(id)

@bp.route('/house/<int:id>' , methods=['PUT','PATCH'] )
def updatehouse(id):
    return update_house(id)

@bp.route('/house/<int:id>' , methods=['DELETE'] )
def deletehouse(id):
    return delete_house(id)


#crud operations for reviews
@bp.route('/review', methods=['POST'])
def add_review():
  return create_review()

@bp.route('/review')
def getreviews():
    return get_reviews()

@bp.route('/review/<int:id>')
def getreview(id):
    return get_review(id)

@bp.route('/review/<int:id>', methods=['PUT', 'PATCH'])
def updatereview(id):
    return update_review(id)

@bp.route('/review/<int:id>', methods=['DELETE'])
def deletereview(id):
    return delete_review(id)

     