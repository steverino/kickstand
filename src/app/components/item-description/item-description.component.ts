import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
 
export class ItemDescriptionComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.GetItem(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updateItem(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/items-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}