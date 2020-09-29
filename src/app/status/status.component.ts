import { Component, Input, OnInit } from '@angular/core';
import { RegisterServicesService } from '../services/register-services.service';
import { map } from 'rxjs/operators';
import { seats } from '../status/seats';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private registerService: RegisterServicesService) { }
  @Input() seats: seats;
  seat: any;
  

  ngOnInit() {

    this.registerService.getSeatList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(seats => {
      this.seat = seats;
      console.log("Hi");
      console.log(this.seat);

    });

  }

}
