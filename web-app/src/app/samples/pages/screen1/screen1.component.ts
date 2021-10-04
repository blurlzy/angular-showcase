import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../../../shared/services/notifier.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  constructor(private notifier: NotifierService) { }

  ngOnInit(): void {
  }

  notify(): void {
	  this.notifier.showNotification('This is a testing message', 'Confirm', 'error');
  }
}
