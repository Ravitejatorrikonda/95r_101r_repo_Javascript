/**
 * 
 * 
 * Arrow functions:-
 * ------------------
 * 
 * A function without function name and function keyword and it is defined with the symbol of => is known as a Arrow function.
 * 
 * SY:-
 *          ([parameter....])=>{
 *           //statements
 *          [return]
 *       }
 * 
 * Arrow function has a implicit return type
 */


// var a=()=>{
//     return 10+20;
// }
// console.log(a())



// var print=a=> a+20

// console.log(print(10,40))





// function x(a,b){
//     console.log("x function")
//    console.log( a(34,43))
//    console.log(b(44,33))
// }

// x((a,b)=>a+b,(b,c)=>b+c);

function print(callback1, callback2) {
    return callback1(10, 20) + callback2(1, 335667);
}


console.log(print(
     (a, b)=>a + b,
    (c, d)=>c + d
    

))