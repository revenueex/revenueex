import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new regex';
  sideBarStatus = 'hidden';

  toggleSideBar() {
    if (this.sideBarStatus == 'hidden') {
      this.sideBarStatus = '';
    } else {
      this.sideBarStatus = 'hidden';
    }
  }
}
