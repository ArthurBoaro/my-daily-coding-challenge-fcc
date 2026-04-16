function nthFibonacci(n) {

    if(n == 0) return 0;
    if(n == 1) return 1;

    let fibonacciNum = 0;
    let n0 = 0;
    let n1 = 1;

    for (let i = 3; i <= n; i++) {
        fibonacciNum = n0 + n1;
        n0 = n1;
        n1 = fibonacciNum;
    }

    return fibonacciNum;
}