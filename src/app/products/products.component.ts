import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() data: Products[];
  
  constructor() { }

  ngOnInit() {
  }

}
