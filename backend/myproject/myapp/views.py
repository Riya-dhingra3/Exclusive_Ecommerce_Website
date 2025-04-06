from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer
from .utils import create_user
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
