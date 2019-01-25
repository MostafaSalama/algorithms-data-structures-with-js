// global scope
var a = 10 ;

function foo() {
    console.log(a) ;
    a = 5 ;
}
foo() ;
console.log(a) ;

// local function scope

function local() {
    var localVariable = 10 ;
    console.log(localVariable) ;
}
console.log(localVariable) // ReferenceError: localVariable is not defined

// its better to use ""let"" for blocking scope
function f() {
    for(let i = 0 ; i<10;i++){
        let protocol = 'http' ; // this is block scope
    }
}
/*
   using const
   now you can't assign values to that variable
 */

const BASE_URL = 'https://www.google.com';

BASE_URL = 'http://www.github.com'; // TypeError: Assignment to constant variable

