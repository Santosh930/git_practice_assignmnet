function checkPrime(number){
    let count=0;
    for(let i=1;i<=number;i++){
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
checkPrime(13);