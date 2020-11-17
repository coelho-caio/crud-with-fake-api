import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[];

  constructor(public crudService: CrudService, private router: Router, ) { }

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data:Product[])=>
    {
      console.log(data);
      this.products = data;
    })
  }
delete(id:number) {
  console.log(id);
  this.crudService.delete(id).subscribe(res=>{
    this.ngOnInit(); });
}

}
