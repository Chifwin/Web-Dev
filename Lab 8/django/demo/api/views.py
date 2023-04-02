from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
