import { Component, OnInit } from '@angular/core';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private validationService: ValidationService) {

  }

  ngOnInit() {
    this.validationService.getValidation().subscribe(data => {
      let method = data['base-test-field'].validators;
      
      console.log(method);

      for (let m of method) {
        this[m]();
      }
    });

   
  }

  logMessage() {
    console.log("HEY IT WORKS");
  }

  validator_moreThanZero() {
    console.log("Must be more than zero");
  }

  validator_lessThan100() {
    console.log("Must be less than 100");
  }
  
  validator_numeric() {
    console.log("Gotta be a number");
  }
}
