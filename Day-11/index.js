/**
 * 
 * 
 * 
 */



// function sum(callback){
//     console.log("something")
//     callback();
// }
// sum( ()=>console.log("callback fun"));


function sum(val, callback) {
    callback(val + 2);
}

function sub(val, callback) {
    if (false) {
        callback(val - 5);
    } else {
        console.log("something went wrong")
    }
}

function mul(val, callback) {
    callback(val * 2)
}

function div(val, callback) {
    callback(val / 2)
}




// sum(10,(sumres)=>console.log(sumres))
// sub(10,(subres)=>console.log(subres))
// mul(10,(mulres)=>console.log(mulres))
// div(10,(divres)=>console.log(divres))

sum(10, (sumres) => {
    console.log(sumres)
    sub(sumres, (subres) => {
        console.log(subres)
        mul(subres, (mulres) => {
            console.log(mulres)
            div(mulres, (divres) => {
                console.log(divres)
            })
        })
    })
})

console.clear();



function orderPlaced(callback) {
    callback("Order Placed Successfully")
}

function shipping(callback) {
    callback("Shipping Success")
}

function dispatch(callback) {
    callback("dispatch success")
}
function deliver(callback) {
    callback("delevred success")
}



orderPlaced((res1) => {
    console.log(res1)
    shipping((res2) => {
        console.log(res2)
        dispatch((res3) => {
            console.log(res3)
            deliver((res4) => {
                console.log(res4)
            })
        })
    })
})



// orderPlaced((res)=>console.log(res))
// shipping((res)=>console.log(res))
// dispatch((res)=>console.log(res))
// deliver((res)=>console.log(res))





