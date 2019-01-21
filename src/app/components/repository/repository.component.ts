import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html'
})

export class RepositoryComponent implements OnInit {
  // PROPRTIES
  page: number  = 1; // The page of data to load from github api && will be incremented on scroll to get new data
  formattedDate: string = ''; // To get the date exactly of last 30 days, dynamically
  reps = []; // This array to store repositories that are came from service
  isFinished: boolean = false; // To know wether iteration arrived to the end or not

  // CONSTRUCTOR
  constructor(private service: RepositoryService) { } // Initialize constructor with an object of service to access it

  // ON INIT METHOD
  ngOnInit() {
    // Get excatly the date before 30 days to get data from service dynamically
    /*const date = new Date();
    const priorDate = new Date(date.setDate(date.getDate() - 30));
    this.formattedDate = priorDate.getFullYear() + '-' + priorDate.getMonth() + '-' + priorDate.getDate();*/

    // Get repositories and assign the date and the page as params, in this example we use the date marked in github api
    this.getAll('2017-10-22', this.page);
  }

  // METHODS
  getAll(date, page) {
    console.log(this.page + ' / ' + 35);
    console.log(this.isFinished);

    // Call "getRepositories" method from service to get all repositories on Github api
    this.service.getRepositories(date, page).subscribe((data: Array<object>) => {
      for (let i = 0; i < data['items'].length; i++) {
        const obj = {
          avatar_url: data['items'][i].owner.avatar_url,
          name: data['items'][i].name != null ? data['items'][i].name : "No name found",
          description: data['items'][i].description != null ? data['items'][i].description : "No description found",
          stargazers_count : data['items'][i].stargazers_count != null ? data['items'][i].stargazers_count : "0",
          open_issues_count : data['items'][i].open_issues_count != null ? data['items'][i].open_issues_count : "0"
        };

        //Push received object in "reps" array
        this.reps.push(obj);
      }
    }, // If some errors occured, block iteration to return
    (err: HttpErrorResponse) => {
      if(!err.ok){
        this.isFinished = true;
      }
    });
  }

  // When scroll down the screen
  onScroll() {
    //When user scrolls down && reached the items count wanted, then we increment "page" variable to get new data
    this.page = this.page + 1;

    //Call "getAll" method again and assign "page" to it
    this.getAll(this.formattedDate, this.page);
  }
}
