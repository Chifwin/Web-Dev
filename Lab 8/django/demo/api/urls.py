from django.contrib import admin
from django.urls import path, re_path
from django.http.response import HttpResponse
from api.views import *

urlpatterns = [
    path('products', product_list)
]
