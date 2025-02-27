from django.contrib import admin
from .models import Product

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('product_name',)}
    list_display = ('product_name', 'price', 'stock', 'category', 'modified_date', 'created_date', 'is_available')
    list_display_links = ('product_name',)
    list_filter = ('category', 'created_date', 'is_available')
    list_editable = ('is_available',)
    search_fields = ('product_name', 'category')
    list_per_page = 20


admin.site.register(Product, ProductAdmin)

