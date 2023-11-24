import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.less'],
})
export class ItemDetailComponent implements OnInit {
	product: Product | undefined;
	errorMessage = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

  ngOnInit(): void {
  	const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.accountService.getItem(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err,
    });
  }

  onBack(): void {
    this.router.navigate(['./geodis-dashboard'], { relativeTo: this.route.parent });
  }

}
