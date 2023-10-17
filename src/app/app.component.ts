import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GaneshProfile';

  val: string[] = ['about', 'certificate', 'main']
  about: boolean = false;
  main: boolean = true;
  certificate: boolean = false;

  redirect(id: number) {

    switch (id) {
      case 0:{
        console.log(this.about)
        this.about = false;
        this.main = true;
        this.certificate = false;
        break;
      }
      case 1: {
        console.log(this.about)
        this.about = true
        this.main = false;
        this.certificate = false;
        break;
      }
      case 2: {
        console.log(this.about)
        this.certificate = true;
        this.about = false;
        this.main = false;

        break;
      }
    }

  }

  closeothers(data: string) {

    this.val.forEach(x => {
      if (x !== data) { }
    })

  }
}
