import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  nums = {input: ''};
  result = {output: ''};


  constructor() { }

  ngOnInit() {
  }

}
