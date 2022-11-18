import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/Artists';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit {

  public artists: Artist[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadArtist();
  }

  public async loadArtist() {
    this.artists = await this.apiService.get<Artist[]>('artists')
  }

}
