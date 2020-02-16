import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class JewelryService {
  constructor(private http: HttpClient) {}

  getJewelry(): Observable<string> {
    return this.http.get("http://54.39.188.42/", { responseType: "text" });
  }
}
