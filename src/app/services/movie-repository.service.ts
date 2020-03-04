import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../metier/movie';
import { Page } from '../metier/page';

@Injectable({
  providedIn: 'root'
})
export class MovieRepositoryService {

  private urlmovie = 'http://localhost:8080/movies';
  private noPage: number;
  private sizePage: number;
  private movieSubject: BehaviorSubject<Page<Movie>>;

  constructor(private http: HttpClient) {
    this.noPage = 0;
    this.sizePage = 4;
    this.movieSubject = new BehaviorSubject(Page.emptyPage());
  }

  /**
   * Methode de sortie avec vers les components
   */
  public getPageMovieAsObservable(): Observable<Page<Movie>> {
    return this.movieSubject.asObservable();
  }

  /**
   * cette methode va communiquer avec le backend controller
   */
  public refreshListe(){
    this.http.get<Page<Movie>>(this.urlmovie).subscribe(
      m => { this.movieSubject.next(m), console.log(m); }
    );
  }
}
