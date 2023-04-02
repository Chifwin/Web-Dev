from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from datetime import datetime, timedelta


def home(request):
    cur_t = datetime.now()
    return HttpResponse(cur_t)


def plus(request, data):
    cur_t = datetime.now() + timedelta(days=int(data))
    return HttpResponse(cur_t)

