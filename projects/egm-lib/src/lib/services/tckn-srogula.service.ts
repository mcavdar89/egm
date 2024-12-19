import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultDto } from '../models/result-dto.model';

@Injectable({
  providedIn: 'root'
})
export class TcknSrogulaService {
  private _http: HttpClient;
  constructor() {
    this._http = inject(HttpClient);
  }
  get(tckn: number):Observable<ResultDto<string>> {
    return this._http.get<ResultDto<string>>("http://localhost:5100/api/tcknsorgula/" + tckn);
  }

}
