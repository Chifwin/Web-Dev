from api.models import Company, Vacancy

from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework import status

from .serializers import CompanySerializer, VacancySerializer


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        ser = CompanySerializer(companies, many=True)
        return JsonResponse(ser.data, safe=False)
    if request.method == 'POST':
        ser = CompanySerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=status.HTTP_201_CREATED)
        return JsonResponse(ser.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_one(request, comp_id):
    print(request.method)
    try:
        company = Company.objects.get(id=comp_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        ser = CompanySerializer(company)
        return JsonResponse(ser.data)

    if request.method == 'PUT':
        ser = CompanySerializer(company, data=request.data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=status.HTTP_201_CREATED)
        return JsonResponse(ser.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)


def vacancy_by_company(request, comp_id):
    vacancies = Vacancy.objects.filter(company__id=comp_id)
    return JsonResponse(VacancySerializer(vacancies).data, safe=False)


def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        ser = VacancySerializer(vacancies, many=True)
        return JsonResponse(ser.data, safe=False)
    if request.method == 'POST':
        data = JSONParser().parse(request)
        ser = VacancySerializer(data=data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=201)
        return JsonResponse(ser.errors, status=400)


@csrf_exempt
def vacancy_one(request, vac_id):
    try:
        vacancy = Vacancy.objects.get(id=vac_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        ser = VacancySerializer(vacancy)
        return JsonResponse(ser.data)
    if request.method == 'POST':
        data = JSONParser().parse(request)
        ser = VacancySerializer(vacancy, data=data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=201)
        return JsonResponse(ser.errors, status=400)


def vacancy_top10(request):
    vacancies = Vacancy.objects.all().order_by('salary')
    return JsonResponse(VacancySerializer(vacancies, many=True).data, safe=False)
