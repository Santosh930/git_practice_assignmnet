function checkPrime(number){
    let count=0;
    for(let i=2;i*i<=number;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count===0){
        console.log("It is a Prime number");
    }
    else{
        console.log("It is not a Prime number");
    }
}
checkPrime(2);
checkPrime(3);
checkPrime(5);
checkPrime(4);
checkPrime(2000);
checkPrime(1555);