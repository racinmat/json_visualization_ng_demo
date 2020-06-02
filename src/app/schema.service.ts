import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  counter = 0;

  constructor(private http: HttpClient) {
    console.log("tvoje máma");
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/reddit_cuckoo_schema.json");
  }
}
