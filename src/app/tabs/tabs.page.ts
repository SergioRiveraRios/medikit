import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Doctor} from 'src/app/doctorModel/doctor'
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  doctor:Doctor;
  constructor(private router:Router,private actrouter:ActivatedRoute) {
  }
}
