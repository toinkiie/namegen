import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { GenerateRequest } from '../models/generate-request';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { GeneratedName } from '../models/generated-name.model';
import { environment } from '@namegen/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NameGeneratorService {
  private apiUrl = environment.apiUrl;
  private inc = ['picture', 'name', 'dob', 'phone', 'cell'];

  constructor(private http: HttpClient) { }

  generate(request: GenerateRequest): Observable<GeneratedName[]> {
    const params = new HttpParams()
      .set('gender', request.gender)
      .set('nat', request.nat)
      .set('results', String(request.results))
      .set('inc', this.inc.toString());

    return this.http.get<Observable<GeneratedName[]>>(`${this.apiUrl}`, { params }).pipe(
      map((res: any) => res.results.map((val: any) => new GeneratedName(val)))
    );
  }
}
