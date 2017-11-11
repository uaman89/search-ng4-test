import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public query: string;

  public searchServiceList: any[] = [
    {name: 'Google', url: 'https://www.google.com.ua/search?q='},
    {name: 'Bing', url: 'https://www.bing.com/search?q='},
    {name: 'Ask', url: 'https://www.ask.com/web?q='},
  ];
  public error: string;

  public onSearchClick() {

  }
}
