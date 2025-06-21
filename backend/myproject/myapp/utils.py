from rest_framework.response import Response
from rest_framework import status
from .schema import check_user_exists, create_user_schema, check_password
from django.contrib.auth.hashers import make_password
from .models import User
import jwt
from django.conf import settings
from datetime import datetime, timedelta
import traceback

def create_user(data, user_id):
    try:
        response= check_user_exists(data.get('email'), data.get('phone_number'))
        if response:
            return Response({
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
                "message": "User created successfully",
                "user_id": str(user_id),
                "access_token": access_token,
                "refresh_token": refresh_token
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "error_code": "50003",
                "message": "User creation failed",
            }, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(traceback.format_exc()) 
        return Response({
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)



def login_api(email,phone,password):
    try:
        identifier = email if email else phone
        user = check_password(email, phone, password)

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
