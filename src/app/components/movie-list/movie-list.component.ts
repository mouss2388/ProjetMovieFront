import { Component, OnInit } from '@angular/core';
import { MovieRepositoryService } from 'src/app/services/movie-repository.service';
import { Subscription } from 'rxjs';
import { Page } from 'src/app/metier/page';
import { Movie } from 'src/app/metier/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private moviesubription: Subscription;
  private movies: Page<Movie>;

  constructor(private movieService: MovieRepositoryService ) { }

  ngOnInit() {

    this.moviesubription = this.movieService.getPageMovieAsObservable().subscribe(pm => this.movies = pm );
    this.movieService.refreshListe();

  }
}
