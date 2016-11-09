import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './playlist.routes';
import { PlayListComponent } from './components/list.component';
import { CreateListComponent } from './components/create.component';
import { PlayListDetailComponent } from './components/playlistdetail.component';
import { SongListComponent } from './components/songlist.component';

import { HomeModule } from '../home/home.module';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HomeModule,
        routing
    ],
    declarations: [
        PlayListComponent,
        CreateListComponent,
        PlayListDetailComponent,
        SongListComponent
        
    ],
    bootstrap: [
        PlayListComponent
    ]
})
export class PlaylistModule{
    constructor(){}
}