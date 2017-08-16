import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiURL = 'http://localhost:3000/'
  public title = 'app';
  constructor(private http: Http) {}
  ngOnInit() {
  	this.http.get(this.apiURL + 'notes').subscribe(response => console.log(response))
  }
}
