import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.less']
})
export class ItemCreateComponent implements OnInit {
	pageTitle = 'Item Create';
	errorMessage: string;
	productForm: FormGroup;

	powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { 
  	this.productForm = fb.group({
      productName: [''],
      productCodeId: [''],
      starRatingId: [''],
      qtyId: [''],
      availDateId: [''],
      locationId: ['']
    });
  }

  ngOnInit(): void {
  }

  saveProduct(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['./geodis-dashboard']);
  }

}
