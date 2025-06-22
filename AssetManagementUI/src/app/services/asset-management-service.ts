import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AssetManagementService {
    constructor(private http: HttpClient) {}

    getDataByDate(date: string): Observable<any>
    {
        return this.http.post<any>("http://localhost:5081/v1/asset-management/get-by-date", {balanceOfDate: date});
    }
}