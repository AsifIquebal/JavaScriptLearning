// can be called here
// add() allowed
function add(){
    console.log(2+3)
}

// add() allowed
// named function can not be called before initialization
//addition() // not allowed
let addition = function(){
    console.log(5+2)
}
// addition() allowed


let add1= function(num1, num2){
    console.log(num1+num2)
}
add1(1,2)

let add2= (num1, num2) => {
    console.log(num1+num2)
}
add2(2,2)

let add3 = () => {
    console.log(3+3)
}
add3()