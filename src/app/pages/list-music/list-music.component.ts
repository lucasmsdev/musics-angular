import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Genre } from 'src/app/models/Genre';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  public genres: Genre[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loadGenres();
}


public async loadGenres() {
  this.genres = await this.apiService.get<Genre[]>('genres');
}

}
