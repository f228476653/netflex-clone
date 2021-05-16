import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movies } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient) { }
  getTrending():Observable<Movies>{
    return this.http.get<Movies>(`${environment.API_URL}${endpoint.trending}` , {
      params: {
        api_key: environment.API_KEY
      }
    })
  }
  getLatestMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${environment.API_URL}${endpoint.latest}`, {
      params: {
        api_key: environment.API_KEY
      }
    });
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${environment.API_URL}${endpoint.now_playing}`, {
      params: {
        api_key: environment.API_KEY
      }
    });
  }

  getOriginals(): Observable<Movies> {
    return this.http.get<Movies>(`${environment.API_URL}${endpoint.originals}`, {
      params: {
        api_key:  environment.API_KEY
      }
    });
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${environment.API_URL}${endpoint.popular}`, {
      params: {
        api_key: environment.API_KEY
      }
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${environment.API_URL}${endpoint.top_rated}`, {
      params: {
        api_key: environment.API_KEY
      }
    });
  }
}

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv'
}
