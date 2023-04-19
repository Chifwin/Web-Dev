import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  BASE_URL = 'http://127.0.0.1:8000/api';
  constructor(private client: HttpClient) { }

  get_companies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies`)
  }

  get_company(id: number): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/${id}`)
  }

  create_company (
    company_name: string,
    company_description: string,
    company_city: string,
    company_address: string,
  ): Observable<Company> {
    return this.client.post<Company>(
      `${this.BASE_URL}/companies`,
      {
        name: company_name,
        description: company_description,
        city: company_city,
        address: company_address
      }
    )
  }

  update_company (
    id: number,
    company_name: string,
    company_description: string,
    company_city: string,
    company_address: string,
  ): Observable<Company> {
    return this.client.put<Company>(
      `${this.BASE_URL}/companies/${id}`,
      {
        name: company_name,
        description: company_description,
        city: company_city,
        address: company_address}
    )
  }

  deleteCompany(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/companies/${id}`)
  }

}
