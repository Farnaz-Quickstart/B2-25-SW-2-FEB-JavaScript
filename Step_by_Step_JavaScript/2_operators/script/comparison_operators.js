/*
Reference: https://www.w3schools.com/js/js_comparisons.asp#:~:text=When%20comparing%20a%20string%20with,NaN%20which%20is%20always%20false%20.&text=When%20comparing%20two%20strings%2C%20%222,1%20is%20less%20than%202.
Operator	       Meaning	              Example	             Result
==	      Is equal to (value)	          5 == "5"	           true
===	      Is equal (value & type)	      5 === "5"	           false
!=	      Is not equal (value)	        10 != 8	             true
!==	      Is not equal (value/type)	    10 !== "10"	         true
>	        Greater than	                7 > 3	               true
<	        Less than	                    3 < 2	               false
>=	      Greater than or equal to	    5 >= 5	             true
<=	      Less than or equal to	        4 <= 3	             false
&&	      and	                          (x < 10 && y > 1)    true	  
||	      or	                          (x == 5 || y == 5)   false	
!	        not	                          !(x == y)            true
*/

let age1 = 15;
let age2  = 11; 
let age3 = "10"



// console.log (age1 == age2)      // check equal value
// console.log (age1 == age3)      // check equal value
// console.log (age1 === age2)     // check equal value and equal type
//console.log (age1 != age2)      // not equal
//console.log (age1 !== age3)     // check not equal value and equal type
console.log (age1 > age2)     // greater than
console.log (age1 >= age2)    // greater than or equal to
console.log (age1 < age2)     // less than
console.log (age1 <= age2)    // less than or equal to



if ((age1 > age2) && (age2 > age3)) {
  console.log ("you are older")
}

if ((age1 > 10) || (age2 > 10)) {
  console.log ("You need a .....")
}