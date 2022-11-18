import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Music } from 'src/app/models/Music';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  public musics: Music[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMusic();
  }
  public async loadMusic() {
    this.musics = await this.apiService.get<Music[]>('musics')
  }

}
