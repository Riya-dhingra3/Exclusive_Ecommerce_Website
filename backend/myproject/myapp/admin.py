from django.contrib import admin
from .models import User, ShippingAddress, Category, Product, Wishlist, Cart, Order
# Register your models here.

admin.site.register(User)
admin.site.register(ShippingAddress)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Wishlist)
admin.site.register(Cart)
admin.site.register(Order)
