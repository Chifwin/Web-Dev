from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('products', product_list),
    path('products/<int:pid>/', product_one),
    path('categories', category_list),
    path('categories/<int:cid>/', category_one),
    path('categories/<int:cid>/products', product_by_category),
]
