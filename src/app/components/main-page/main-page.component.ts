import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit,OnDestroy {
  sticky = true;
  headerBGUrl:string="";
  images: Array<any> = [];
  constructor(private movieService:MovieService) {}
  trend: Movies;
  subs: Subscription[] = [];
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;
  ngOnInit(): void {
    this.movieService.getTrending().subscribe(
      data => {
        this.trend = data;
        console.log(this.trend);
        this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trend.results[0].backdrop_path;
      },
      error => {
        console.error('failed');
        // handle error...
      }
    );
    console.log(this.trend);
    this.subs.push(this.movieService.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movieService.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movieService.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this.movieService.getNowPlaying().subscribe(data => this.nowPlaying = data));
  }
  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }
}
