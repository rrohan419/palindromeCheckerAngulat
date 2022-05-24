import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'palindromeCheck';
  number=0;
  tempVar = 0;

  checkIfPalindrone(number:number)
  {
    var tempStorage= number;
    console.log(tempStorage,"good evening");
    var remainder =0;

    while(tempStorage!=0)
    {
      
      remainder = tempStorage%10;
      tempStorage= Math.floor(tempStorage/10);
      // console.log(tempStorage);
    
      this.tempVar = ((this.tempVar*10)+remainder);
    }
    console.log(this.tempVar);
    console.log(number);
    if(number==this.tempVar)
    {
      this.tempVar=0;
      alert("it is a palindrome");
    }
    else
    {
      this.tempVar=0;
      alert("it is not a palindrome");
    }
  }
}
