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