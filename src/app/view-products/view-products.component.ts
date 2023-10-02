import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyProducts } from 'src/model/myProducts';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  
  searchKey:string=''
  productDetails:any=[]
  response:any=[]
  
  constructor(private api:ApiService){
  
  }
  
  ngOnInit(): void {
    this.api.getProducts().subscribe((data:MyProducts)=>{
      this.productDetails=data.products
      console.log(data.products)
    })
  }
  
  filter(event:any){
    console.log(event.target.value)
    this.searchKey=event.target.value
  }

}
