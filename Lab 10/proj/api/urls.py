from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:comp_id>/', company_one),
    path('companies/<int:comp_id>/vacancies/', vacancy_by_company),

    path('vacancies/', vacancy_list),
    path('vacancies/<int:vac_id>/', VacancyOne.as_view()),
    path('vacancies/top_ten/', vacancy_top10),
]
