import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

    this.prueba('');
  }

  name: string | undefined;

  prueba(name: string) {
    if (name == '') {
      this.name = 'Juan Salazar';
    }
    else
    {
    this.name = name;
    }
  }


}
