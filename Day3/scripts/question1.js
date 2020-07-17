function findOddEven(){
    var number = prompt("Please Enter Any Number");

    if ( number % 2 == 0) {
        variable = console.log(`The number entered is ${number} and Number is even`);
        console.log(variable);
    }else{
        variable = console.log(`The number entered is ${number} and Number is odd`);
        console.log(variable);
    }
}  

findOddEven();
