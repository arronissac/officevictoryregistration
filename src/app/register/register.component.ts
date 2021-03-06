import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { RegisterServicesService } from '../services/register-services.service';
import { register } from './register';
import { map } from 'rxjs/operators';
import { seats } from '../status/seats';
import { Observable } from 'rxjs';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() register: register;
  @Input() seats: seats;
  constructor(private registerService: RegisterServicesService, private db: AngularFireDatabase) { }

  objs: register = new register();
  objr: AngularFireList<register>;
  cnt: AngularFireList<seats>;
  customers: any;
  seat: any;
  count1: AngularFireObject<any>;
  ctn: AngularFireObject<any>;


  ngOnInit() {

    this.registerService.getregisterList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
      console.log(this.customers);
    });

    this.registerService.getSeatList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(seats => {
      this.seat = seats[0].count;

    });









  }
  delete(key, list) {

    console.log(this.seat);
    const s = this.seat + list;
    console.log(s);

    

      this.registerService
      .updateseatList('1', { count: s })
      .catch(err => console.log(err));

    this.registerService
    .deleteregister(key)
    .catch(err => console.log(err));
   
  }
  add_reg() {

    const r = this.objs.list;
    console.log(this.seat);
    const s = this.seat - r;
    console.log(s);
    if (s >= 0) {
    this.registerService
      .updateseatList('1', { count: s })
      .catch(err => console.log(err));

    this.registerService.createregister(this.objs);
    this.objs.name = undefined;
    this.objs.list = undefined;
    } else {
      alert('Seats are Full! only ' + this.seat + ' Avalibale');
    }





  }


  makepdf()
  {
   html2canvas(document.getElementById("table")).then(canvas => {
 
     var pdf = new jsPDF('p', 'pt', 'a4');
     pdf.text('1ST SERVICE LIST', 11, 8);
     
     
     var imgData  = canvas.toDataURL("image/jpeg", 1.0);
    
     pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
     pdf.save('service1.pdf');
 });
  }

}
