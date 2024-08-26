import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from "../services/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {Payment, Student} from "../model/students.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  public students!:Array<Student>;

  public dataSource:any;
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'code', 'programId','payments'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! :MatSort;
  student!: Student;
  constructor(private studentService:StudentsService,private router:Router) {
  }

  ngOnInit(): void {

    this.studentService.getAllStudents()
      .subscribe(
        {
          next : data => {
            console.log('Students data:', data);
            this.students=data;
            this.dataSource=new MatTableDataSource(this.students);
            this.dataSource.paginator=this.paginator;
            this.dataSource.sort=this.sort;
          },
          error :err => {
            console.log(err);
          }
        }
      )
  }

  studentPayments(student: Student) {
    this.router.navigateByUrl(`/admin/students-details/${student.code}`);
  }

}
