import { Component } from '@angular/core';
import {Vacancy} from "../models";
import {VacanciesService} from "../services/vacancies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent {
  vacancies: Vacancy[] = [];
  id: number = -1;

  constructor(private service: VacanciesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.get_company_vacancies(this.id).subscribe((vacs) =>
        this.vacancies = vacs
      )}
    )
  }
}
