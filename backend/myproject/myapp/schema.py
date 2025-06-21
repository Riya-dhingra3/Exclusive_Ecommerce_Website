from myapp.models import User
from django.contrib.auth.hashers import check_password as django_check_password
import logging
import traceback

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


def check_password(email=None, phone=None, password=None):
    try:
        if email:
            user = User.objects.filter(email=email).first()
        else:
            user = User.objects.filter(phone_number=phone).first()

        if user and django_check_password(password, user.password):
            return user

        return None

    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in check_password: {e}")
        return None

