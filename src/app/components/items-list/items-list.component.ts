import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
 
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
 
export class ItemsListComponent implements OnInit {
   
  Items:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetItems().subscribe(res => {
      console.log(res)
      this.Items =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteItem(id).subscribe((res) => {
        this.Items.splice(i, 1);
      })
    }
  }
 
}