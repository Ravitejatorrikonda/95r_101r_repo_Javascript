/**
 * 
 * Promises In javascript:-
 * ------------------------
 * ->Primise is a state of behaviour, here there is a 2 states,
 *    ->succcesss state
 *   ->failure state
 * 
 * ->Proises also used for performing the asynchronous operations
 * ->to Overcome the callback hells
 * 
 * 
 * sy:-
 * 
 * 
 * variable identifier=new Promise(callback);
 * 
 */


// let promise = new Promise((resolve,reject) => {

//     if(a==5){
//         res("success")
//     }else{
//         reject("failure");
//     }
// })


// promise.then((res)=>console.log(res)).catch((res)=>console.log(res))




// function print(){
//     return new Promise((resolve,reject)=>{
//         resolve("success");
//     })
// }
// print().then((res)=>console.log(res)).catch((res)=>console.log(res))

// function A() {
//     console.log("A")
// }
// function B() {
//     console.log("B")
// }
// function C() {
//     console.log("C")
// }
// function D() {
//     console.log("D")
// }



// Promise.resolve("Success").then((res)=>console.log(res))

// Promise.reject("Failiure").catch((res)=>console.log(res))



function sum(val) {
    return new Promise((res, rej) => {
        res(val + 10)
    })
}
function sub(val) {
    return new Promise((res, rej) => {
        res(val - 5)
    })
}
function mul(val) {
    return new Promise((res, rej) => {
        res(val * 5)
    })
}
function div(val) {
    return new Promise((res, rej) => {
        res(val / 2)
    })
}




// sum(10).then((sumres) => sub(sumres))
//     .then((subres) => mul(subres))
//     .then((mulres) => div(mulres))
//     .then((divres) => console.log(divres))





















// sum(10).then((sumres)=>console.log(sumres))

// sub(20).then((subres)=>console.log(subres))

// mul(15).then((mulres)=>console.log(mulres))

// div(75).then((divres)=>console.log(divres))

// function placeOrder(orderId) {
//     return new Promise((res, rej) => {
//         console.log(`Order di : ${orderId} placed `)
//         res()
//     })
// }

// placeOrder(1234).then((res)=>dispatchOrder(1234))
// .then