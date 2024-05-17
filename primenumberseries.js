function primenumberseries(num){
    for(i=2;i<=num;i++){
        let isPrime = false;
       for(j=2;j<i;j++){
            if(i%j==0){
                break
            }else
            {
                isPrime = true;
                break;
            }
            
       }
       if (isPrime == true){
        console.log(i)
       }

    }
}
primenumberseries(20);