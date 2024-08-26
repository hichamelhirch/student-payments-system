import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { StudentsService } from "../services/students.service";
import { Payment } from "../model/students.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  studentCode!: string;
  studentPayments!: Array<Payment>;
  paymentsDataSource!: MatTableDataSource<Payment>;

  public displayedColumns: string[] = ['id', 'date', 'amount', 'paymentType', 'paymentStatus','firstName','details'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute,
              private studentService: StudentsService,
              private router: Router) {}

  ngOnInit(): void {
    this.studentCode = this.route.snapshot.params['code'];

    // Fetch payments for the student
    this.studentService.paymentsByStudent(this.studentCode).subscribe(
      payments => {
        this.studentPayments = payments;
        this.paymentsDataSource = new MatTableDataSource<Payment>(this.studentPayments);
        this.paymentsDataSource.paginator = this.paginator;
        this.paymentsDataSource.sort = this.sort;
      },
      error => {
        console.error('Error fetching payments:', error);
      }
    );
  }

  newPayment() {
    this.router.navigateByUrl(`/admin/new-payment/${this.studentCode}`)
  }

  paymentsDetails(payment:Payment) {
    this.router.navigateByUrl(`/admin/payments-details/${payment.id}`)
  }
}
