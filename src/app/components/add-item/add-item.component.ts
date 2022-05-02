import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
 
export class AddItemComponent implements OnInit {
 
  itemForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.itemForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddItem(this.itemForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/items-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}