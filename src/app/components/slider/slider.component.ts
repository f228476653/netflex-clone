import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {

  constructor() { }
  @Input() movies: Movies;
  @Input() title: string;
  images: any = [];
  ngOnChanges(): void {
    this.movies.results.map( m =>{
      this.images.push({path: 'https://image.tmdb.org/t/p/original' + m.poster_path})
    })
  }

}
