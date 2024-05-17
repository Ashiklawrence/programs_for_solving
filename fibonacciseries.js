function fibonacciseries(num){
    let a = 0;
    let b = 1;
    for(i=0;i<=num;i++){
        console.log(a);
        let c = a + b;
        a = b;
        b = c;

    }
}
fibonacciseries(10);

