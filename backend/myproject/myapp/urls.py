from django.urls import path
from .views import SignupView, CategoryView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('category/', CategoryView.as_view(), name='category'),
]