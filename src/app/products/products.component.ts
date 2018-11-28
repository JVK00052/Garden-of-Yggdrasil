import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../db/data.service';
import { Products } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.dataService.getProducts().subscribe(Products => this.products = Products)
  }

  delete(id) {
    if (localStorage.getItem('token')) {
      this.dataService.delete(id).subscribe(id => {this.getProducts()})
    } else {
      alert('You are neither Thor, nor Loki, nor Hela. Mortal you have no power here.')
    }
  }

}
