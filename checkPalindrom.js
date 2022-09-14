function checkPalindrom(str){
    let bag='';
    for(let i=str.length-1;i>=0;i--){
        bag += str[i];
    }
    if(str===bag){
        console.log("It is a palindrom ");
    }
    else{
        console.log("It is not a palindrom");
    }

}
let str="nama";
checkPalindrom(str);