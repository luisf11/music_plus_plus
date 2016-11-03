import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../home/components/search.component';
import { PlayListDetailComponent } from './playlistdetail.component';
import { IPlayList } from '../../../interfaces/playlist/playlist.interface';
import { PlaylistService } from '../../../services/playlist/playlist.service';

@Component({
    selector: 'playlistcreate',
    styles: [ `
    
    `
    ],
    styleUrls: ['modules/playlist/components/wizardtemplate.css'],
    template: ` 
        <h3>Playlist create wizard</h3>
        <div class="container col-sm-12">
        	<div class="row">
        		<section>
                <div class="wizard">
                    <div class="wizard-inner">
                        <div class="connecting-line"></div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" [ngClass]="{'active': step == 1, 'disabled': step > 1}">
                                <a (click)="step='step1'" role="tab" title="Creat list detail">
                                    <span class="round-tab">
                                        <i class="glyphicon glyphicon-pencil"></i>    
                                    </span>
                                </a>
                            </li>
        
                            <li role="presentation" class="" [ngClass]="{'active': step == 2, 'disabled': step < 2}">
                                <a (click)="step='step2'" data-toogle="tab" aria-controls="step2" title="Select songs">
                                    <span class="round-tab">
                                        <i class="glyphicon glyphicon-folder-open"></i>
                                    </span>
                                </a>
                            </li>
                            
                            <li role="presentation" [ngClass]="{'active': step=='3', 'disabled': step < 3}">
                                <a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                                    <span class="round-tab">
                                        <i class="glyphicon glyphicon-ok"></i>
                                    </span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    
                    <form role="form">
                        <div class="tab-content">
                            <div class="tab-pane active" role="tabpanel" [ngClass]="{'active': step=='1'}">
                                <playlistdetail 
                                (onSave)="step1Save($event)"
                                [playlist]="playlist"
                                ></playlistdetail>
                            </div>
                            <div class="tab-pane" role="tabpanel" [ngClass]="{'active': step=='2'}">
                                <search></search>
                            </div>
                            
                            <div class="tab-pane" role="tabpanel" [ngClass]="{'active': step=='3'}">
                                <h3>Complete</h3>
                                <p>You have successfully completed all steps.</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>  
                </section>    
            </div>        
        </div>
    
    
    `,
    providers: [PlaylistService]
})

export class CreateListComponent{
    private step:number = 1;
    @ViewChild(SearchComponent) searchComponent: SearchComponent;
    @ViewChild(PlayListDetailComponent) playlistdetailComponent: PlayListDetailComponent;
    private playlist: IPlayList;
    
    constructor(
        private router:Router, 
        private routerParams: ActivatedRoute,
        private playlistService: PlaylistService
    ){
        this.routerParams.params.subscribe((params) => {
           var id = params['_id'];
           this.playlistService.get(id).subscribe((result) => {
               this.playlist = result.playlist;
           })
        });
    }
    
    toStepTwo(): void{
        
        this.router.navigate(['/search']);
    }
    
    step1Save(playlist){
        this.step = 2;
        this.playlist.name = playlist;
        this.playlist.description = playlist;
    }
}