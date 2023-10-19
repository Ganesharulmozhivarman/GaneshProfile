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
  experience: boolean = false;
  contact: boolean = false;
  Loading:boolean=false;
  
  redirect(id: number) {

    switch (id) {
      case 0:{
        this.about = false;
        this.main = true;
        this.certificate = false;
        this.experience = false;
        this.contact = false;
        break;
      }
      case 1: {
        this.about = true
        this.main = false;
        this.certificate = false;
        this.experience = false;
        this.contact = false;

        break;
      }
      case 2: {
        this.load()
        this.certificate = true;
        this.about = false;
        this.main = false;
        this.experience = false;
        this.contact = false;


        break;
      }
      case 3: {
        this.experience = true;
        this.about = false;
        this.main = false;
        this.certificate = false;
        this.contact = false;


        break;
      }
      case 4:{
        this.contact = true;
        this.experience = false;
        this.about = false;
        this.main = false;
        this.certificate = false;
        break;
      }
    }

  }

  closeothers(data: string) {

    this.val.forEach(x => {
      if (x !== data) { }
    })

  }

  load(){
    this.Loading=true;
    setTimeout(()=>{
      this.Loading = false;
    },13000)
  }
  redirectToln() {
    window.open('https://www.linkedin.com/in/ganesh-arulmozhivarman', '_blank');
  }
  redirectTocv() {
    window.open('https://drive.google.com/file/d/1PVyF9F_a4jksWLUQyUsHniQHuKDyxYcO/view?usp=share_link', '_blank');
  }
}
