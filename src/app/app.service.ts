import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getValue(){
      console.log("in get value");
      return this.http.get('/api/showValue')
            .map((res:Response)=>res);
  }

}
