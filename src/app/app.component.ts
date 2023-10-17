import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GaneshProfile';
  about:boolean=false;

  redirect(){
    console.log(this.about)
    this.about = !this.about
  }
}
