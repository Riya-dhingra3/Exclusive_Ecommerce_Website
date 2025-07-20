from rest_framework.response import Response
from rest_framework import status
from .schema import (check_user_exists, 
                     create_user_schema, check_password, 
                     create_category_schema,
                     get_categories_schema,
                     check_category_exists,
                     create_product_schema,
                     get_products_schema,
                     get_category_id)
from django.contrib.auth.hashers import make_password
import jwt
from django.conf import settings
from datetime import datetime, timedelta
import traceback

def create_user(data, user_id):
    try:
        response= check_user_exists(data.get('email'), data.get('phone_number'))
        if response:
            return Response({
                "status": "false",
                "error_code": "50002",
                "message": "User already exists",
            }, status=status.HTTP_400_BAD_REQUEST)
        hashed_password = make_password(data.get('password'))
        data['password'] = hashed_password
        access_token = jwt.encode(
            {"user_id": user_id,
             "type": "access",
             "exp": datetime.utcnow() + timedelta(minutes=30)},
            settings.SECRET_KEY,
            algorithm="HS256"
        )
        refresh_token = jwt.encode(
            {"user_id": user_id,
             "type": "refresh",
             "exp": datetime.utcnow() + timedelta(days=7)},
            settings.SECRET_KEY,
            algorithm="HS256"
        )
        response=create_user_schema(data, user_id)
        if response==200:
            return Response({
                "status": "true",
                "message": "User created successfully",
                "user_id": str(user_id),
                "name": data.get('name'),
                "email": data.get('email'),
                "phone_number": data.get('phone_number'),
                "access_token": access_token,
                "refresh_token": refresh_token
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "status": "false",
                "error_code": "50003",
                "message": "User creation failed",
            }, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(traceback.format_exc()) 
        return Response({
            "status": "false",
            "error_code": "50001",
            "message": str(e),
        }, status=status.HTTP_400_BAD_REQUEST)


def create_category(data):
    try:
        response=create_category_schema(data)
        if response==200:
            return Response({
                "status": "true",
                "message": "Category created successfully",
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "status": "false",
                "error_code": "50004",
                "message": "Category creation failed",
            }, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(traceback.format_exc())
        return Response({
            "status": "false",
            "error_code": "50001",
            "message": str(e),
        }, status=status.HTTP_400_BAD_REQUEST)


def get_categories():
    try:
        response_data, response_status=get_categories_schema()
        if response_status==200:
            return Response({
                "status": "true",
                "categories": response_data
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "status": "false",
                "error_code": "50005",
                "message": "Categories retrieval failed",
            }, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(traceback.format_exc())
        return Response({
            "status": "false",
            "error_code": "50001",
            "message": str(e),
        }, status=status.HTTP_400_BAD_REQUEST)


def create_product(data):
    try:
        category_id=data.get('category_id')
        response=check_category_exists(category_id)
        if not response:
            return Response({
                "status": "false",
                "error_code": "50007",
                "message": "Category does not exist",
            }, status=status.HTTP_400_BAD_REQUEST)
        response=create_product_schema(data)
        if response==200:
            return Response({
                "status": "true",
                "message": "Product created successfully",
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "status": "false",
                "error_code": "50006",
                "message": "Product creation failed",
            }, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(traceback.format_exc())
        return Response({
            "status": "false",
            "error_code": "50001",
            "message": str(e),
        }, status=status.HTTP_400_BAD_REQUEST)


def get_products(request,product_id=None, category_id=None, category_name=None, page=1, page_size=10):
    try:
        if category_name:
            category_id=get_category_id(category_name)
            if not category_id:
                return Response({
                "status": "false",
                "error_code": "50008",
                "message": "Category does not exist",
                }, status=status.HTTP_400_BAD_REQUEST)

        response_data, response_status=get_products_schema(product_id, category_id)
        if response_status==200:
            total = len(response_data)
            start = (page - 1) * page_size
            end = start + page_size
            data = response_data[start:end]
            for item in data:
                if 'product_image' in item and request:
                   item['product_image'] = request.build_absolute_uri('/media/' + item['product_image'])
            return Response({
                "status": "true",
                "total": total,
                "page": page,
                "page_size": page_size,
                "products": data
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "status": "false",
                "error_code": "50009",
                "message": "Products retrieval failed",
            }, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(traceback.format_exc())
        return Response({
            "status": "false",
            "error_code": "50001",
            "message": str(e),
        }, status=status.HTTP_400_BAD_REQUEST)


def login_api(email_or_phone,password):
    try:
        user = check_password(email_or_phone, password)

        if not user:
            return Response({
                "status":"false",
                "error_code": "50002",
                "message": "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)
        
        access_token = jwt.encode(
            {"user_id": str(user.user_id), 
            "type": "access", 
            "exp": datetime.utcnow() + timedelta(minutes=30)},
            settings.SECRET_KEY,
            algorithm="HS256"
        )
        refresh_token = jwt.encode(
            {"user_id": str(user.user_id), "type": "refresh", "exp": datetime.utcnow() + timedelta(days=7)},
            settings.SECRET_KEY,
            algorithm="HS256"
        )
        return Response({
            "status":"true",
            "message":"Login Successful",
            "user_id":str(user.user_id),
            "name":user.name,
            "email": user.email,
            "phone_number": user.phone_number,
            "access_token": access_token,
            "refresh_token": refresh_token
        },status=status.HTTP_200_OK)

    except Exception as e:
        print(traceback.format_exc())
        return Response({
            "status":"false",
            "error_code": "50001",
            "message": str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
