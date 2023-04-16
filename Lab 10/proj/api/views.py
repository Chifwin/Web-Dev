from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def company_list(request):
    return JsonResponse(
        list(c.to_json() for c in Company.objects.all()),
        safe=False
    )

@csrf_exempt
def company_one(request, comp_id):
    try:
        company = Company.objects.get(id=comp_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse(company.to_json())

def vacancy_by_company(request, comp_id):
    return JsonResponse(
        list(v.to_json() for v in Vacancy.objects.filter(company__id = comp_id )),
        safe=False
    )

def vacancy_list(request):
    return JsonResponse(
        list(v.to_json() for v in Vacancy.objects.all()),
        safe=False
    )


@csrf_exempt
def vacancy_one(request, vac_id):
    try:
        vacancy = Vacancy.objects.get(id=vac_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())


def vacancy_top10(request):
    return JsonResponse(
        list(v.to_json() for v in Vacancy.objects.all().order_by('salary'))[:10],
        safe=False
    )