import { Injectable } from '@angular/core';
import { GummiBear } from "./logic/GummiBear";
import { Http } from "@angular/http"

 
@Injectable()
/*   {  providedIn: 'root'} */
  
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://localhost:3000";

  get(gummibearId: string, callback){
    this.http.get(`${this.endpoint}/gummibears/${gummibearId}`)
    .subscribe(response => {
      callback(response.json());
    });
  }

  getList(callback) {
     /* const list = [
      new GummiBear ("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
      new GummiBear ("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    ]; 
    callback(list); */
    this.http.get(`${this.endpoint}/gummibears`)
      .subscribe(response => {
      console.log(response.json());
      callback(response.json());
    });
  }

  save(gummibear, callback) {
    if (gummibear._id) {
      // It's an update
      this.http.put(`${this.endpoint}/gummibears/${gummibear._id}`, gummibear)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/gummibears`, gummibear)
        .subscribe(response => {
          callback(true);
        });
    }
  }
}