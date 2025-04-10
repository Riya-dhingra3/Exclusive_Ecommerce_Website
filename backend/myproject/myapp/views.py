from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, CategorySerializer
from .utils import create_user, create_category, get_categories
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
                "status": "error",
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
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)


class CategoryView(APIView):
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                "status": "error",
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
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)
    
