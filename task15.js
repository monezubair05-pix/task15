function determine(numder = 0){
    if( numder % 2 == 0){
        console .log("even")
    }
    else {
        console.log ("old")
    }
}
 determine(4)

console .log("------------------------")

function largerNumber(num1 = 0 , num2 = 0){
    if( num1 > num2){
        console .log (num1)
    } else if (num2 >num1 ){
        console .log(num2)
    }

}
largerNumber(3,1)

console.log ("-----------------------")

function clacage(age = 2026){
    var rusilt = 2026 - age 
    console .log ("your age is " + rusilt)
}
clacage(2000)

console .log("-----------------------------")

function oldNum( end = 0 ){
    for( var i = 1 ; i <= end ; i++){
        if (i % 3 == 0){
            console .log (i);
        }
    }
}
oldNum(20)


console .log("--------------------------")

function cluc(NUM){
    for (var i = 1 ; i + i ; i++){
        console .log(i)
    }
}
cluc         (10)