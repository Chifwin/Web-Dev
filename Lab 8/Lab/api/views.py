from django.http import JsonResponse
from django.shortcuts import render
from api.models import *


def _get_all_obj_json(where):
    return [p.to_json() for p in where.objects.all()]


def product_list(request):
    return JsonResponse(_get_all_obj_json(Product), safe=False)


def product_one(request, pid):
    for p in _get_all_obj_json(Product):
        if p['id'] == pid:
            return JsonResponse(p)
    return JsonResponse({'error': "Item doesn't exist"})


def category_list(request):
    return JsonResponse(_get_all_obj_json(Category), safe=False)


def category_one(request, cid):
    for c in _get_all_obj_json(Category):
        if c['id'] == cid:
            return JsonResponse(c)
    return JsonResponse({'error': "Category doesn't exist"})


def product_by_category(request, cid):
    for c in _get_all_obj_json(Category):
        if c['id'] == cid:
            return JsonResponse({c['name']: [p for p in _get_all_obj_json(Product) if p['description'] == c['name']]})
    return JsonResponse({'error': "Category doesn't exist"})
