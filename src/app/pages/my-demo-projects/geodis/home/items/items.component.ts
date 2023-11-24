import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less'],
})
export class ItemsComponent implements OnInit {
	products: Product[] = [];
	errorMessage = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  	this.accountService.getItems().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err,
    });
  }

}
