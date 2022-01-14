'use strict';

// задание 2//
function pow (x, n) {
    const y=x;
      while ( n>1 ){
        x *= y;
        n--;
      }
      return x;
    }  
    
    alert ( pow(3, 3) );
    alert ( pow(3, 2) );
    alert ( pow(1, 100));
 // задание 1//

 function min( a, b ){
    console.log( (a<b)? a : b );
    }
    

    min(2, 5)
    min(3, -1)
    min(1, 1)
// задание 3//

function isEven(num) {
     return num % 2 == 0;
    }
  
  console.log(isEven(5));
  console.log(isEven(4));

  //задание 0 //

  function say_hello(name) {

    alert("Hello, " + name)
 
 }