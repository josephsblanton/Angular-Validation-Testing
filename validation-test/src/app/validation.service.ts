import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ValidationService {
  configUrl = 'assets/validation.json';

  constructor(private http: HttpClient) { }

  getValidation() {
    return this.http.get<string>(this.configUrl)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        // catchError(this.handleError) // then handle the error
      );
  }

}
