import { Component, OnInit } from '@angular/core';
import { UserFinderService } from '../../services/user-finder.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    public finder: UserFinderService,
    private _snackBar: MatSnackBar
  ) {}

  searchTerm: string = '';
  foundUser = [];
  noUser = false;
  durationInSeconds = 3;

  ngOnInit(): void {}

  getUserInfos(searchTerm) {
    this.finder.getUser(searchTerm).subscribe(
      (user) => {
        this.foundUser.shift();
        this.foundUser.push(user);
        this.searchTerm = '';
      },
      (err) => {
        if (err.status === 404) {
          this._snackBar.open(
            `No User with Name: ${this.searchTerm} found`,
            'Close',
            {
              duration: 5000,
            }
          );
        }
      }
    );
  }
}
