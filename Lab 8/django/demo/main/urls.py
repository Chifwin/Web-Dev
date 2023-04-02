from django.contrib import admin
from django.urls import path, re_path
from django.http.response import HttpResponse
from main.views import *

urlpatterns = [
    path("home/", home),
    re_path(r'^plus/(\d+)/$', plus),
]
