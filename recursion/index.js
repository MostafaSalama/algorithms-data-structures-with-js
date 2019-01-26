/*
    Rules of recursion

    + Base Case
    + Divide and Conquer

 */

function fibonacci(n) {
    // Base Case
    if(n<=1) {
        return n ;
    }
    return fibonacci(n-1) + fibonacci(n-2) ;
}

