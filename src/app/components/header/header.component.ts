import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('stickHeader') header: ElementRef | undefined;
  headerBGUrl: string="";
  constructor(private movieService:MovieService) {}
  trend:any;
  sticky= true;
  ngOnInit(): void {
    this.movieService.getTrending().subscribe(data =>{
      this.trend=data;
      this.trend =this.trend['results'];
      this.headerBGUrl = `https://image.tmdb.org/t/p/original/${this.trend[0].backdrop_path}`;
    })
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
