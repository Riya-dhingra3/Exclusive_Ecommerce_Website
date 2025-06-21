# User Hits API (e.g., POST /signup)
#         ↓
# urls.py → matches route
#         ↓
# views.py → handles request
#         ↓
# serializers.py → validates and saves data
#         ↓
# models.py → interacts with DB
#         ↓
# utils.py (optional) → extra logic

from rest_framework import serializers
from .models import User, Category, Product
import re

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'name', 'email', 'phone_number', 'password', 'address']
        extra_kwargs = {
            'password': {'write_only': True, 'required': True},
            'name': {'required': True},
            'email': {'required': False, 'allow_null': True, 'allow_blank': True},
            'phone_number': {'required': False, 'allow_null': True, 'allow_blank': True},
            'address': {'required': False, 'allow_null': True, 'allow_blank': True},
        }

    def validate(self, data):
        try:
            email = data.get('email')
            phone = data.get('phone_number')
            password = data.get('password')

            if not email and not phone:
                raise serializers.ValidationError("Either email or phone_number must be provided.")

            if email:
                email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                if not re.match(email_pattern, email):
                    raise serializers.ValidationError("Invalid email address format.")

            if phone:
                phone_pattern = r'^\d{10}$'
                if not re.match(phone_pattern, phone):
                    raise serializers.ValidationError("Phone number must be exactly 10 digits.")

            # Validate password
            if password:
                if len(password) < 8:
                    raise serializers.ValidationError("Password must be at least 8 characters long.")
                if not re.search(r'[A-Z]', password):
                    raise serializers.ValidationError("Password must contain at least one uppercase letter.")
                if not re.search(r'[a-z]', password):
                    raise serializers.ValidationError("Password must contain at least one lowercase letter.")
                if not re.search(r'\d', password):
                    raise serializers.ValidationError("Password must contain at least one digit.")
                if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
                    raise serializers.ValidationError("Password must contain at least one special character.")
            
            return data
        except Exception as e:
            raise serializers.ValidationError(f"Validation error: {str(e)}")


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_id', 'category_name']
        extra_kwargs = {
            'category_name': {'required': True}
        }

    def validate(self, data):
        category_name = data.get('category_name')
        if not category_name:
            raise serializers.ValidationError("Category name is required.")
        return data
    

class ProductSerializer(serializers.ModelSerializer):
    category_id = serializers.UUIDField(required=True)
    class Meta:
        model = Product
        fields = ['product_id', 'category_id', 'product_name', 'discount', 'current_price', 'old_price', 'product_image']
        extra_kwargs = {
            'product_name': {'required': True},
            'current_price': {'required': True},
            'old_price': {'required': True},
            'product_image': {'required': True},
            'discount': {'required': False},
        }
        
    def validate(self, data):
        if data['current_price'] > data['old_price']:
            raise serializers.ValidationError("Current price cannot be greater than old price.")
        return data

