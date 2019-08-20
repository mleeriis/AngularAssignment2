import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  noInput = true;

  onClearInput() {
    this.username = '';
    this.noInput = true;
  }

  onEnterUsername(event) {
    if (event.target.value != '') {
      this.noInput = false;
    }
    else{
      this.noInput = true;
    }
  }

}
