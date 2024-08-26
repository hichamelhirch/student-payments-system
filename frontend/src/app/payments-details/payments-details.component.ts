import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../services/students.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payments-details',
  templateUrl: './payments-details.component.html',
  styleUrl: './payments-details.component.css'
})
export class PaymentsDetailsComponent implements OnInit{
 paymentId!: number;
 pdfFileURL:any;
  constructor(private studentService:StudentsService,private activateRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.paymentId=this.activateRoute.snapshot.params['id'];
    this.studentService.getPaymentsDetails(this.paymentId).subscribe({
      next :value => {
     let blob =new Blob([value],{type:'application/pdf'});
     this.pdfFileURL=window.URL.createObjectURL(blob);
      },
      error:err => {
        console.log(err);
      }
    });
  }

  afterLoadComplete($event: any) {
    console.log(event);
  }
}
