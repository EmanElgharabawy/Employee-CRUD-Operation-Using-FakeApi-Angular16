import { Component } from '@angular/core';
import { IEmployee } from '../model/iemployee';
import { EmployeeService } from '../Services/employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent {
  constructor(private employeeService:EmployeeService , private activeRoute: ActivatedRoute , private Router: Router){}
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params["id"];

    if(this.id != undefined)
    {
      this.employeeService.getByID(this.id as number).subscribe((data)=>{
        this.employee = data
        if(this.employee != undefined)
        this.employeForm.setValue({
          id: this.employee?.id,
          name: this.employee?.name,
          age: this.employee?.age,
          salary: this.employee?.salary,
          address: this.employee?.address,
        })
        else
          {
            alert("ID doesn't Exist");
            this.Router.navigate(['/employee'])
          }
        });


  }

  console.log(this.id)
  console.log(this.employee)
}

  id : number | undefined = undefined;
  employee : IEmployee | undefined = undefined  ;
  employees: IEmployee[] = [];
  employeForm: FormGroup = new FormGroup({
    id : new FormControl({value: this.employee?.id, disabled : true}),
    name: new FormControl(this.employee?.name, [Validators.required, Validators.minLength(5)]),
    age: new FormControl(this.employee?.age, [Validators.required, Validators.min(23),Validators.max(40)]),
    salary: new FormControl(this.employee?.salary, [Validators.required, Validators.min(4000),Validators.max(11000)]),
    address: new FormControl(this.employee?.address, [Validators.required, Validators.pattern("(cairo|alex)")]),
  });

  get idControl(){
    return this.employeForm.get("id");
  }
  get nameControl() {
    return this.employeForm.get("name");
  }
  get ageControl(){
    return this.employeForm.get("age");
  }
  get salaryControl(){
    return this.employeForm.get("salary");
  }
  get addressControl(){
    return this.employeForm.get("address");
  }

  AddEmployee() {
    let employee: IEmployee = this.employeForm.value;
    console.log(employee)
    this.employeeService.add(employee).subscribe(()=>{
      this.Router.navigate(['/employee'])
    });

  }

  EditEmployee(){
    let oldEmployee : IEmployee
    this.employeeService.getByID(this.id as number).subscribe((data)=>{
      oldEmployee = data
      console.log(oldEmployee)
      let newEmployee = this.employeForm.value as IEmployee;
      newEmployee.id = oldEmployee.id;
      this.employeeService.edit(newEmployee).subscribe(()=>{
        this.Router.navigate(['/employee'])
      });

    });

  }
}
