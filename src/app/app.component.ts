import {Component} from '@angular/core';

declare function escape(s:string): string;

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
  public title = 'Test app!';
}
