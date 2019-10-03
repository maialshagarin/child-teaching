var name=prompt("WHAT IS YOUR NAME?")
alert("Thank you for visit us"+name);
function myFunction() {
   confirm("Press a button!");
 }
myFunction()
var month =prompt("Enter the month of the year") ;
var result ;
if (month==='december'|month=== 'janyary'|month ==='february'){
   result = 'nice winter';
}else if( month=== 'march'| month=== 'april'| month==='may'){
   result = 'nice spring';
}else if ( month=== 'june'| month=== 'august'| month==='july'){
   result='nice summer'; 
 }else if ( month=== 'november'| month==='october' | month=== 'august'){
   result= 'nice autnum';}
   else{
    result='nice year';
   }
   
document .write( ' <h3>' +result + '</h3>');
console.log('hi');
var calculate=prompt ("5*7=");
while (calculate!= 35) {
   calculate = prompt ("Sorry incorrect awnswer");
}
if (calculate == 35) {
alert ("this is true");
}