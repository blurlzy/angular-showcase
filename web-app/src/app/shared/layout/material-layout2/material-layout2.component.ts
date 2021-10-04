import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-material-layout2',
  templateUrl: './material-layout2.component.html',
  styleUrls: ['./material-layout2.component.scss']
})
export class MaterialLayout2Component implements OnInit {
  // handSetSize = ['(max-width: 780px)'];
  // toggle sidebar & its mode when size of window changes
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // ctor 
  constructor(private router: Router,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  // public methods
  // redirect to login page with back url state
  signout(): void {

  }


}
