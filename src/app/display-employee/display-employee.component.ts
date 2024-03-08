import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../model/iemployee';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent  implements OnInit {

  employees : IEmployee[] | undefined;
constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getData()
  }
  Delete(id:number)
  {
    this.employeeService.delete(id).subscribe(()=>{
      this.getData();
    });

  }

  getData(){
    this.employees;
    this.employeeService.getAll().subscribe((data)=>{
      this.employees = data
    })
  }
}



 
  




