import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  

  transform(viewProducts:any[],searchName:string,prodName:string):any[]{

    const result:any[]=[]  //for holding the search returnde product
     

    if(!viewProducts||searchName==''||prodName==''){
      return viewProducts;
     
    }

      viewProducts.forEach((products:any)=>{
        if(products[prodName].trim().toLowerCase().includes(searchName.trim().toLowerCase())){
          result.push(products)
        }
      }) 
     return result;
   
   
  }

}
