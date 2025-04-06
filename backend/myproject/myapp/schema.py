from myapp.models import User
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

