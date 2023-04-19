import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "../models";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  BASE_URL = 'http://127.0.0.1:8000/api';
  constructor(private client: HttpClient) { }

  get_vacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies`)
  }

  get_vacancy(id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/${id}`)
  }

  get_company_vacancies(id: number) {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`)
  }

  create_vacancy (
    vacancy_name: string,
    vacancy_description: string,
    vacancy_salary: string,
    vacancy_company_id: string
  ): Observable<Vacancy> {
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/vacancies`,
      {
        name: vacancy_name,
        description: vacancy_description,
        salary: vacancy_salary,
        company: vacancy_company_id
      }
    )
  }

  update_vacancy (
    id: number,
    vacancy_name: string,
    vacancy_description: string,
    vacancy_salary: string,
    vacancy_company_id: string
  ): Observable<Vacancy> {
    return this.client.put<Vacancy>(
      `${this.BASE_URL}/vacancies/${id}`,
      {
        name: vacancy_name,
        description: vacancy_description,
        salary: vacancy_salary,
        company: vacancy_company_id
      }
    )
  }

  delete_vacancy(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/vacancies/${id}`)
  }

}
