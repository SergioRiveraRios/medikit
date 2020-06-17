import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctorModel/doctor';
import { DoctorsService } from 'src/app/services/doctors/doctors.service'
import { Admin } from 'src/app/models/admin/admin';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.page.html',
  styleUrls: ['./view-doctors.page.scss'],
})
export class ViewDoctorsPage implements OnInit {
  public doctors: Doctor[];
  public admin: Admin;
  constructor(private docService: DoctorsService,
              private router:Router) {
    this.admin = JSON.parse(localStorage.getItem('myData')) as Doctor;
    console.log("Did data load? : ", this.admin);
    this.getDoctorsCollection();
  }
  
  ngOnInit() {
    this.getDoctorsCollection();
  }
  getDoctorsCollection() {
    this.docService.getDoctors().subscribe(data => {
      this.doctors = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Doctor;
      })
    });
  }

  newDoctor(){  
    this.router.navigate(['/new-medic'])
  }

  viewDoctor(doctor: Doctor): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(doctor)
      }
    };
    this.router.navigate(['../detail-doctor'], extras);
  }
}
