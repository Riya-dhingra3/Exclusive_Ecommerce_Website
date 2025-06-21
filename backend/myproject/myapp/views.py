from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer
from .utils import create_user, login_api
import uuid
import traceback

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



class LoginView(APIView):
    def post(self, request):
        try:
            email = request.data.get('email')
            phone = request.data.get('phone_number')
            password = request.data.get('password')

            if (not email and not phone) or (not password):
                return Response({
                    "status":"false",
                    "error_code":"50001",
                    "message": "Please provide the essential details",
                }, status=status.HTTP_400_BAD_REQUEST)

            response = login_api(email, phone, password)
            return response

        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "status":"false",
                "error_code": "50001",
                "message": str(e),
            }, status=status.HTTP_400_BAD_REQUEST)



