import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AirlineService } from 'src/app/service/airline.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

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

  //delete airline
  deleteAirlines(id: any){
    this.airlineService.deleteAirline(id)
    .subscribe((res)=>{
      this.findAirlines()
    })
  }


}
