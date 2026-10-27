/**
 * 
 * Synchronous & Asynchronous:-
 * ----------------------------
 * Callstack:-
 * 
 * 
 */






// console.log(1)
// console.log(2)
// setTimeout(()=>{
//     console.log(3)
// },2000);
// console.log(4)







// function x(){
//     console.log("x")
//     setTimeout(()=>{
//         console.log("y")
//     },1000)
//     console.log("z")
// }
// x();




function x(){
    console.log("x fun")
}
function y(){
    setTimeout(()=>{
        console.log("y function")
    },3000)
}
function z(){
    setTimeout(()=>{
         console.log("Z funtion")
    },2000)
}

y()
z()
x()







