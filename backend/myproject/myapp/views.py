from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, CategorySerializer, ProductSerializer
from .utils import create_user, create_category, get_categories, create_product, get_products
import uuid
import traceback
import os
from dotenv import load_dotenv

load_dotenv()

class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)

        if not serializer.is_valid():
            return Response({
                "status": "false",
                "errors": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            data = serializer.validated_data
            user_id=str(uuid.uuid4())
            response=create_user(data, user_id)
            return response

        except Exception as e:
            print(traceback.format_exc()) 
            return Response({
                "status": "false",
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)


class CategoryView(APIView):
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                "status": "false",
                "errors": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            data = serializer.validated_data
            secret_key = request.headers.get('secret-key')
            print(os.getenv('API_KEY'))
            if not secret_key or secret_key != os.getenv('API_KEY'):
                return Response({
                    "status": "false",
                    "error_code": "50004",
                    "message": "Invalid secret key"
                }, status=status.HTTP_401_UNAUTHORIZED)
            response=create_category(data)
            return response
        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "status": "false",
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request):
        try:
            secret_key = request.headers.get('secret-key')
            if not secret_key or secret_key != os.getenv('API_KEY'):
                return Response({
                    "status": "false",
                    "error_code": "50004",
                    "message": "Invalid secret key"
                }, status=status.HTTP_401_UNAUTHORIZED)
            response=get_categories()
            return response
        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "status": "false",
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)
    

class ProductView(APIView):
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                "status": "false",
                "errors": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            data = serializer.validated_data
            secret_key = request.headers.get('secret-key')  
            if not secret_key or secret_key != os.getenv('API_KEY'):
                return Response({
                    "status": "false",
                    "error_code": "50004",
                    "message": "Invalid secret key"
                }, status=status.HTTP_401_UNAUTHORIZED)
            response=create_product(data)
            return response
        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "status": "false",
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        try:
            secret_key = request.headers.get('secret-key')
            access_token = request.headers.get('access-token')
            if not access_token:
                if not secret_key or secret_key != os.getenv('API_KEY'):
                    return Response({
                        "status": "false",
                        "error_code": "50004",
                        "message": "Either secret key or access token is missing"
                    }, status=status.HTTP_401_UNAUTHORIZED)
            product_id = request.query_params.get('product_id')
            category_id = request.query_params.get('category_id')
            category_name=request.query_params.get('category_name')
            response=get_products(product_id, category_id, category_name)
            return response
        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "status": "false",
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)

