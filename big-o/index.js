/*
    analysing the worst case respecting to input of n
 */

// O(1) constant

const arr = [1,2,3,4,5] ;

const first = arr[0] ;

console.log(first) ;

// O(n) linear operations _  n in the worst case
function linearOperations(n) {
    for(let i = 0 ; i<n ;i++){
        console.log(n) ;
    }
}
linearOperations(20) ;

/*
    O(n**2) quadratic time
    O(n**3) cubic time

 */
// simple example

/**
 * simple function to explain quadratic time O(n**2) 
 * @param n {number}
 */
function quadraticOperations(n=20) {
    for(let i =0 ; i<n;i++){
        for(let j = 0 ; j<n;j++) {
                console.log(i*j) ;
        }
    }

}
quadraticOperations() ;