import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    header: any;
    path: string;

    constructor(readonly http: HttpClient) {
        this.path = environment.apiURL;
    }

    get(url: string) {
        return this.http.get(`${this.path}${url}`);
    }

    getByQuery(url: string, params : HttpParams) {
        return this.http.get(`${this.path}${url}`, { params });
    }

    post(url: string, data: any): any {
        return this.http.post(`${this.path}${url}`, data);
    }

    put(url: string, data: any): any {
        return this.http.put(`${this.path}${url}`, data);
    }

    delete(url: string, id: string) {
        return this.http.delete(`${this.path}${url}${id}`);
    }
}
