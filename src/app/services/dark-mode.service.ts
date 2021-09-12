import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDark = JSON.parse(localStorage.getItem('isDark'));

  detectMode() {
    var getMode = JSON.parse(localStorage.getItem('isDark'));
    if (getMode) {
      document.body.style.backgroundColor = '#141c2f';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  }

  switchMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('isDark', JSON.stringify(this.isDark));
    if (this.isDark) {
      document.body.style.backgroundColor = '#141c2f';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  }
}
