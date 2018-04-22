import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FindStoreService {


  constructor(private http: HttpClient) {
  }

  //simple service that uses httpclient get operation and takes lat/long and returns observable with location object
  findClosestGamingStoreWithCoords(latCoords: string, longCoords: string): Observable<any> {
    let url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latCoords},${longCoords}&sensor=false&key=AIzaSyBJ5iQ7j68zCCCjxqggHUDk26E3BZEV4nY`;
    return this.http.get(url);
  }

}
