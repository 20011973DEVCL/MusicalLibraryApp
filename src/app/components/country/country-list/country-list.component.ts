import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { CountryResult } from '../../../interfaces/country.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: CountryResult[]=[];
  displayedColumns: string[] = ['idCountry', 'countryName'];
  dataSource = new MatTableDataSource<CountryResult>();
  currentPage: number = 1; // Página actual
  pageSize: number = 20; // Cantidad de elementos por página

  constructor(private countryService: CountryService, private router: Router) {
    this.countryService.getCountries().subscribe(data => {
      if (data.successful) {
        this.countries = data.result;
        this.dataSource.data = this.countries;
        console.log(this.dataSource.data);
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.countries.length / this.pageSize);
  }

  get displayedCountries(): CountryResult[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.countries.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }



  ngOnInit(): void {
    // debugger;
    // this.countryService.getCountries().subscribe(data => {
    //   if (data.successful) {
    //     this.dataSource.data = data.result;
    //     // this.countries = data.result;
    //     console.log(this.dataSource.data);
    //   }

    // });
  }

  editCountry(id: string): void {
    this.router.navigate(['/country/edit', id]);
  }

  addCountry(): void {
    this.router.navigate(['/country/new']);
  }

  deleteCountry(id: string): void {
    this.countryService.deleteCountry(id);
    //this.countries = this.countryService.getCountries();
  }

}
