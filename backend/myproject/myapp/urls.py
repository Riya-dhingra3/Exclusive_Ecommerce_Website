from django.urls import path
from .views import SignupView, CategoryView, ProductView, LoginView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('category/', CategoryView.as_view(), name='category'),
    path('product/', ProductView.as_view(), name='product'),
    path('login/', LoginView.as_view(), name='login')
]