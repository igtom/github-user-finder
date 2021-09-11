import { Component, OnInit } from '@angular/core';
import { UserFinderService } from './services/user-finder.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private finder: UserFinderService, private fb: FormBuilder) {}

  title: string = 'Github Search';
  isDark: boolean = true;
  img: string = '';
  fullName: string = 'No Data Available';
  joined: string = '';
  username: string = '';
  bio: string = '';
  website: string = 'No Data Available';
  location: string = 'No Data Available';
  twitterName: string = 'No Data Available';
  company: string = 'No Data Available';
  repos: number = 0;
  followers: number = 0;
  following: number = 0;

  searchUser = this.fb.group({
    name: ['', Validators.required],
  });

  ngOnInit(): void {
    this.finder.getUser('igtom').subscribe((data) => {
      this.img = data.avatar_url;
      this.fullName = data.name;
      this.joined = data.created_at;
      this.username = data.login;
      this.bio = data.bio;
      this.website = data.blog;
      this.location = data.location;
      this.twitterName = data.twitter_username;
      this.company = data.company;
      this.repos = data.public_repos;
      this.followers = data.followers;
      this.following = data.following;
    });
  }

  getUser() {
    this.finder
      .getUser(this.searchUser.get('name')?.value)
      .subscribe((data) => {
        this.img = data.avatar_url;
        this.fullName = data.name;
        this.joined = data.created_at;
        this.username = data.login;
        this.bio = data.bio;
        this.website = data.blog ? data.blog : 'No Data Available';
        this.location = data.location ? data.location : 'No Data Available';
        this.twitterName = data.twitter_username
          ? data.twitter_username
          : 'No Data Available';
        this.company = data.company ? data.company : 'No Data Available';
        this.repos = data.public_repos;
        this.followers = data.followers;
        this.following = data.following;
      });
    this.searchUser.reset();
  }
}
