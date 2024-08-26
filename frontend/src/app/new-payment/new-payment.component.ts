import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PaymentType} from "../model/students.model";
import {StudentsService} from "../services/students.service";

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent implements OnInit{
paymentsFormGroup!: FormGroup;
studentCode!:string;
paymentType! :string[];
 pdfFileURL!:string;
 showProgress:boolean=false;
constructor(private fb:FormBuilder,
            private activateRoute:ActivatedRoute,
            private studentService:StudentsService) {
}

  ngOnInit(): void {
    this.paymentType = [];

    for (let key of Object.keys(PaymentType)) {
      this.paymentType.push(PaymentType[key as keyof typeof PaymentType]);
    }

    this.studentCode=this.activateRoute.snapshot.params['studentCode'];
  this.paymentsFormGroup=this.fb.group({
    datePayment :this.fb.control(''),
    amount :this.fb.control(''),
    paymentType :this.fb.control(''),
    studentCode :this.fb.control(this.studentCode),
    fileSource :this.fb.control(''),
    fileName :this.fb.control('')
  });
  }

  selectFile(event :any) {
    if(event.target.files.length>0){
      const file =event.target.files[0];
      this.paymentsFormGroup.patchValue({
        fileSource :file,
        fileName :file.name
      });
      this.pdfFileURL=window.URL.createObjectURL(file);
    }
  }

  savePayment() {
  this.showProgress=true;
   // let datePayment=new Date(this.paymentsFormGroup.value.datePayment);
   //let formatedDate=datePayment.getDate()+"/"+(datePayment.getMonth()+1)+"/"+datePayment.getFullYear();
   let formData =new FormData();
   formData.set('datePayment',this.paymentsFormGroup.value.datePayment);
    formData.set('amount',this.paymentsFormGroup.value.amount);
    formData.set('paymentType',this.paymentsFormGroup.value.paymentType);
    formData.set('studentCode',this.paymentsFormGroup.value.studentCode);
    formData.set('file',this.paymentsFormGroup.value.fileSource);
    this.studentService.savePayment(formData).subscribe({
      next :value => {
        this.showProgress=false;
        alert("Payment saved successfully");
      },
      error:err => {
        console.log(err);
      }
    });
  }

  afterLoadComplete($event:any) {
  console.log(event);

  }
}
