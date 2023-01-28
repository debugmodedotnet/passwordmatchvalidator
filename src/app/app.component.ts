import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword } from './matchpassword.validator';
import { defaultPriceValidator } from './price.validator';
import { IProduct } from './product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Password Match Validator';

  loginForm : FormGroup; 

  constructor(){

    this.loginForm = new FormGroup({
      Email : new FormControl(null,[Validators.required]),
      Password : new FormControl(null,[Validators.required]),
      ConfirmPassword : new FormControl(null)
    },
    {
      validators:matchpassword
    })
  }

  login(){
    console.log(this.loginForm.value);
  }
  ngOnInit(): void {}
}






  // product : IProduct = {
  //   Price : 200,
  //   Color: "Red"
  // }

  // // ProductForm : FormGroup; 

//  this.ProductForm = new FormGroup({
  //      title : new FormControl(""),
  //      price : new FormControl(""),
  //      defaultPrice : new FormControl(""),

  //  },
  //  {
  //   validators:defaultPriceValidator
  //  });



   // // saveProduct():void{
  // //   console.log(this.ProductForm.value);
  // // }



  // resetForm():void{
  //   //this.ProductForm.reset();
  // }