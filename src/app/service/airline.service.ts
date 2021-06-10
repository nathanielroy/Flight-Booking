import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  HOST:string = "http://localhost:3000/airlines"

  constructor(private http:HttpClient) { }

  // postAirline(airline: { airlinename: any; uploadlogo: any; contactno: any; contactaddress: any; }){
  //   console.log(airline);
  //   return this.http.post(this.HOST, airline);
  // }

  postAirline(airline: any){
    console.log(airline);
    return this.http.post(this.HOST, airline);
  }

  findAllAirline(){
    return this.http.get(this.HOST);
  }

  deleteAirline(id:number){
    return this.http.delete(this.HOST+"/"+id);
  }

}

