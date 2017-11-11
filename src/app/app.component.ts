import {Component} from '@angular/core';
import {URLSearchParams} from '@angular/http';

interface SearchSystem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public query: string;
  public searchSystem: SearchSystem;
  public appError: string;

  public searchSystemList: SearchSystem[] = [
    {name: 'Google', url: 'https://www.google.com.ua/search?q='},
    {name: 'Bing', url: 'https://www.bing.com/search?q='},
    {name: 'Ask', url: 'https://www.ask.com/web?q='},
    {name: 'Broken', url: 'lalala'},
  ];


  public onSearchClick() {

    // validate selected search:
    try {
      if (!/^http(s?):\/\/w+?/.test(this.searchSystem.url)) {
        throw Error('invalid url of SearchSystem!');
      }
    } catch (error) {
      console.error(` at onSearchClick():`, error);
      this.appError = error;
    }

    console.log(`this.query:`, this.query);
    // validate query:
    if (!this.query) {
      this.appError = 'Enter a search query!';
    }

    if (this.appError) {
      return;
    }

    // go to search result:
    const href = this.searchSystem.url + encodeURI(this.query);
    window.location.href = href;
  }
}
