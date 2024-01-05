import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  productList:any="";
  searchFor:any="";
  finalList:any="";
  constructor(private service:ServiceService, private router:ActivatedRoute){}
  ngOnInit(){
    this.service.getData().subscribe(data =>{
    this.productList=data;

    this.router.params.subscribe(data=>{
    this.searchFor=data['check'];

    for(let product of this.productList){

      if(product.title==this.searchFor)
      {
        this.finalList=product;
        // console.log(this.finalList)
        break;
      }
    }
  }
)
}
    )
}
}
