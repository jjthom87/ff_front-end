import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [`
  .header { text-align:center; margin:15px 0px; }
  ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }
  li { float: left; }
  li a { display: block; color: white; text-align: center; padding: 15px; text-decoration: none; }
  li a:hover { background-color: #111; }
  `]
})
export class AppComponent {
  title = 'Angular 4 Routing App';
}