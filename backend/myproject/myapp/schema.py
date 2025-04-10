from myapp.models import User, Category
import logging
import traceback
import uuid


logger = logging.getLogger(__name__)
def check_user_exists(email=None, phone_number=None):
    try:
        if email:
            return User.objects.filter(email=email).exists()
        elif phone_number:
            return User.objects.filter(phone_number=phone_number).exists()
        return False
    except Exception as e:
        logger.error(f"Error in check_user_exists: {e}")
        return False


def create_user_schema(data, user_id):
    try:
        user = User.objects.create(
            user_id=str(user_id),
            name=data.get('name'),
            email=data.get('email'),
            phone_number=data.get('phone_number'),
            password=data.get('password'),
            address=data.get('address')
        )
        if user:
            return 200
        return 400
    except Exception as e:
        print(traceback.format_exc()) 
        logger.error(f"Error in create_user: {e}")
        return 400


def create_category_schema(data):
    try:
        category = Category.objects.create(
            category_id=str(uuid.uuid4()),
            category_name=data.get('category_name')
        )
        if category:
            return 200
        return 400
    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in create_category: {e}")
        return 400


def get_categories_schema():
    try:
        categories = Category.objects.all().values('category_id', 'category_name')
        if categories:
            return list(categories), 200
        return None, 400
    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in get_categories: {e}")
        return None, 400
