import { Component } from '@angular/core';
import { DataService } from './data.service'
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garden of Yggdrasil';
  data: Products[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts()
    .subscribe((res: Products[]) => {this.data = res})
  }
}