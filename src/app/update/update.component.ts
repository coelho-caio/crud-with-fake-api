import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../crud.service'
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productForm: FormGroup
  id:string=''

  constructor(public fb:FormBuilder, public crudService: CrudService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['productId'];
    this.crudService.getById(this.id).subscribe((data: Product) =>{
      this.productForm = this.fb.group({
        name:[data.name],
        description:[data.description],
        price:[data.price],
        quantity:[data.quantity],
      })
    })
  }
  submitForm(){
    this.crudService.update(this.id, this.productForm.value).subscribe(res=>{
      console.log('product updated')
    }
      )
  }

}
