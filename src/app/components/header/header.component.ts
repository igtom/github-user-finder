import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public switchMode: DarkModeService) {}

  title: string = 'Github Search';
  isChecked: boolean = false;

  ngOnInit(): void {
    this.switchMode.detectMode();
  }
}
