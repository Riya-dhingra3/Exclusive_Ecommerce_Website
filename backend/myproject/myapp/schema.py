from myapp.models import User, Category, Product
from django.contrib.auth.hashers import check_password as django_check_password
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


def check_category_exists(category_id):
    try:
        response=Category.objects.filter(category_id=category_id).exists()
        if response:
            return True
        return False
    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in check_category_exists: {e}")
        return False


def get_category_id(category_name):
    try:
        response=Category.objects.filter(category_name=category_name).values('category_id')
        if response:
            return response[0]['category_id']
        return None
    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in get_category_id: {e}")
        return None

def create_product_schema(data):
    try:
        product = Product.objects.create(
            product_id=str(uuid.uuid4()),
            category_id=data.get('category_id'),
            product_name=data.get('product_name'),
            discount=data.get('discount'),
            current_price=data.get('current_price'),
            old_price=data.get('old_price'),
            product_image=data.get('product_image')
        )
        if product:
            return 200
        return 400
    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in create_product: {e}")
        return 400


def get_products_schema(product_id=None, category_id=None):
    try:
        if product_id:
            response_data=Product.objects.filter(product_id=product_id).values('product_id', 'category', 'product_name', 'discount', 'current_price', 'old_price', 'product_image')
        elif category_id:
            response_data=Product.objects.filter(category=category_id).values('product_id', 'category', 'product_name', 'discount', 'current_price', 'old_price', 'product_image')
        else:
            response_data=Product.objects.all().values('product_id', 'category', 'product_name', 'discount', 'current_price', 'old_price', 'product_image')
        if response_data:
            return response_data, 200
        return None, 400
    except Exception as e:
        print(traceback.format_exc())
        logger.error(f"Error in get_products_schema: {e}")
        return None, 400


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

