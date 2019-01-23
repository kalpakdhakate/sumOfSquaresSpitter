import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sum of Squares Spitter!';
}


// function sumOfSquares(nums){
//   return nums
//     .map(function(num) {return num*num;})
//     .reduce(function(start, num) {return start + num;}, 0);
// }
// console.log(sumOfSquares([6, 7, 8, 9]));
