/**
 * 
 * 
 * Functions
 * Parameters
 * Arguments
 * return
 * 
 * 
 */

// function one(a,b,c){
//     console.log("One")
//     return a+b*two(a,b);
// }

// function two(a,b){
//     console.log("two")
//     return a*b
// }

// console.log(one(10,20,30)+two(20,30))


/**
 * 
 * callback functions:-
 * ----------------------
 * 
 * a function which is passing a argument to another function calling is known as a callback function
 * 
 * a callback function are used to perfoem as a asynchronus operations
 * 
 * 
 * 
 * function x(){
 * 
 * //statements
 * }
 * 
 * 
 * x(function y(){//statements})
 * 
 * 
 * 
 * 
 * 
 */



// function x(callback){
//     console.log("x function...")
//     // console.log(callback)
//     callback();
// }

// function y(){
//     console.log("y function...")
// }



// x(y)





function funone(callback1, callback2) {
    console.log("fun one")

    return callback1() + callback2();

}

// function funtwo(){
//     console.log("fun two")
//     return "akshay"
// }
// function funthree(){
//     console.log("fun Three")
//     return "ajay"
// }

//  var result=funone(funtwo,funthree)
//  console.log(result);


// function x(callback1, callback2) {

//     console.log("x fun")



// }

// function y() { console.log("y fun") }


// x(y,
    
//     function z() { console.log("z fun") }
// )


// y();






// function x(callback){
// console.log("javascript is awesome.....")
// }


// function y(){
//     console.log("react is awsesome...");
    
// }


// x(y);

function x(callback1,callback2){
return callback1(10,20)+callback2(20,30)
}

function y(a,b){
    return a+b;
}
function z(b,c){
    return b+c
}

var result=x(y,z)
console.log(result);
