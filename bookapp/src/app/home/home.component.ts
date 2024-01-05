import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public books:any=[];
  constructor(private service:ServiceService){}
  ngOnInit(){
    this.service.getData().subscribe((data)=>{
      this.books=data})
  }

}
