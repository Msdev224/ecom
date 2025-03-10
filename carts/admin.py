from django.contrib import admin
from .models import Cart, CartItem

from unfold.admin import ModelAdmin as UnfoldModelAdmin
# Register your models here.


class CartItemAdmin(UnfoldModelAdmin):
    list_display = ['product', 'cart', 'quantity', 'is_active']

class CartAdmin(UnfoldModelAdmin):
    list_display = ['cart_id', 'date_added']


admin.site.register(Cart, CartAdmin)

admin.site.register(CartItem, CartItemAdmin)