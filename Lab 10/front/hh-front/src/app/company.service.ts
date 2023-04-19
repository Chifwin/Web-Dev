import { Injectable } from '@angular/core';
import {Company} from "./models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = "http://127.0.0.1:8000/api";
  constructor(private client: HttpClient) { }

  getCompanies() : Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies`);
  }
}
