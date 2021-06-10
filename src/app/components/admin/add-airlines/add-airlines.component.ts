import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AirlineService } from 'src/app/service/airline.service';

@Component({
  selector: 'app-add-airlines',
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.css']
})
export class AddAirlinesComponent implements OnInit {

  myForm:FormGroup;

  airlines : any = [];

  constructor(private airlineService: AirlineService) {
    this.myForm = new FormGroup({
      airlinename: new FormControl(null, [Validators.required]),
        
        uploadlogo: new FormControl(null, Validators.required),

        contactno: new FormControl(null, Validators.required),

        contactaddress: new FormControl(null, Validators.required),
    });
   }

  ngOnInit(){
    this.findAirlines();
  }

  //add airline
  findAirlines(){
    this.airlineService.findAllAirline()
    .subscribe((res:any)=>{
      this.airlines = res;
    })
  }

  //create new airline
  createAirlines(){
    let newAirline = {
      airlinename: this.myForm.value.airlinename,
      uploadlogo: this.myForm.value.uploadlogo,
      contactno: this.myForm.value.contactno,
      contactaddress: this.myForm.value.contactaddress
    } 

    this.airlineService.postAirline(newAirline)
    // .subscribe(function(){}.bind(this))
    .subscribe((res:any)=>{
      console.log(res);
      this.findAirlines()
      console.log("send request");
    })
  }

  //delete airline
  deleteAirlines(id: any){
    this.airlineService.deleteAirline(id)
    .subscribe((res)=>{
      this.findAirlines()
    })
  }


}
