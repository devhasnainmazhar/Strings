// 1 Write a ts program to print day of week name using switch case.

let days: number = 4; 
switch (days) {
  case 1:
    console.log("It's Sunday!");
    break;
  case 2:
    console.log("It's Monday");
    break;
  case 3:
    console.log("It's Tuesday");
    break;
  case 4:
    console.log("It's Wednesday");
    break;
  case 5:
    console.log("It's Thursday");
    break;
  case 6:
    console.log("It's Friday");
    break;
  case 7:
    console.log("It's Saturday");
    break;
}

// 2 Write a ts program print total number of days in a month using switch case.

var month: string = 'november';
    switch(month){
        case 'january' && 'march':
            console.log(month , 'has 31 days');
            break;
        case 'may' && 'july':
            console.log(month , 'has 31 days');
            break;
        case 'octuber' && 'december':
            console.log(month , 'has 31 days');
            break;
        case 'august':
            console.log(month , 'has 31 days');
            break;                    
        case 'feburary' && 'april':
              console.log(month , 'has 30 days');
              break;
        case'june' && 'september':
              console.log(month , 'has 30 days');
              break;       
        case 'november':
              console.log(month , 'has 30 days')
              break;                
    }

// 3 Write a ts program to check whether an alphabet is vowel or consonant using switch case.

var ch:string = 'm';
switch(ch)
{
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
case 'A':
case 'E':
case 'I':
case 'O':
case 'U':
  console.log(ch,"is a vowel");
break;  
  default:
  console.log(ch, 'not a vowel');
  break;
}

// 4 Write a ts program to find maximum between two numbers using switch case.

var numOne : number= 23454;
var numTwo: number = 89;
switch(true) {
    case (numOne > numTwo):
        console.log(`Bigger number is ${numOne}`);
        break;
    case (numOne < numTwo):
        console.log(`Bigger number is ${numTwo}`);
        break;
        default:
          console.log(false, '-> Something went wrong');
}

// 5 Write a ts program to check whether a number is even or odd using switch case.

var  x:number=10%2
switch(x){
  case 0:
    console.log(x,"is even number")
    break;
  case 1:
    console.log(x,"is odd number")
    break;
}

// 6 Write a ts program to check whether a number is positive, negative or zero using switch case.

var num : number = -857;
switch (num > 0)
{
    case true:
        console.log( num, "is positive");
    break;
    case false:
        switch (num < 0)
        {
            case true: 
                console.log( num, "is negative");
                ;
                break;
            case false:
                console.log( num,"is zero");
                
                break;
        }
    break;
}

// 7 Write a ts program to find roots of a quadratic equation using switch case.

let first :number =Number(prompt("Enter first value"));
let second :number =Number(prompt("Enter second value"));
let third :any =Number(prompt("Enter third value "));
switch (first == 0) {
  case true:
    console.log("Invalid");
    console.log("Solution can't find");
  break;

  case false:
    let fourth : any = second * second - 4 * first * third;
    let sqrt_val : any = Math.sqrt(Math.abs(fourth));
        switch (fourth > 0) {
            case true:
                console.log("Roots are real and different \n" + "<br/>");
                console.log((-second + sqrt_val) / (2 * first) + "<br/>"
                            + (-second - sqrt_val) / (2 * first));
                            break;
            
            case false:
              break;
    }
      switch (fourth == 0) {
        case true:
                console.log("Roots are real and same \n" + "<br/>");
                  console.log(-second / (2 * first) + "<br/>"
                                  + -second / (2 * first)) ;
                                  break;
                  
            case false:
              let z: any =-second / (2 * first) ;
              let zz : any = sqrt_val / (2 * first) ;
              let zzz : any = -second / (2 * first);
              let za : any = sqrt_val / (2 * first);
                      console.log("Roots are complex \n");
                      console.log( z + " + i" + zz + "\n"+zzz + " - i" + za) ;
              break;
                          }
}


// 8 Write a ts program to create Simple Calculator using switch case.
var num1 : number = 50;
var num2 : number = 2;
var operation = "-" ;
var result ;
switch(operation){
  case '+':
    result = num1 + num2;
    console.log("addition is", result);
    break;
  case '-':
      result = num1 - num2;
      console.log("subtraction is", result);
      break;    
  case '*':
        result = num1 * num2;
        console.log("Multiplication", result);
        break;
  case '/':
          result = num1 / num2;
          console.log("division is", result);
          break;
}