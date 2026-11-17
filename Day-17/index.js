/**
 * 
 * foreach,map, filter,reduce,reduce right
 * 
 * 
 */

// let arr = [1, 2, 3, 4, 5, undefined, , , undefined]


// arr.forEach((ele) => console.log(ele))


// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// let arr = ["html", "css", "js", "reactjs"]//i/p:-
// let newarr = []

// arr.forEach(ele => newarr.push(ele.toUpperCase()))


//O/p:- ["HTML","CSS","JS","REACTJS"]

// for (i = 0; i < arr.length; i++) {
//     newarr.push(arr[i].toUpperCase())
// }
// console.log(newarr)




// let arr = [1, 2, 3, 4, 5]

// let newarr = arr.map(ele => ele * ele);
// console.log(newarr)









// o/p:- newarr=[1,4,9,16,25]

// let newarr = [];
// arr.forEach(ele=>newarr.push(ele*ele))





// for (i = 0; i < arr.length; i++) {
//     newarr.push(arr[i] * arr[i])
// }
// console.log(newarr)



// let arr = [1, 2, 3, 4, 5, 6]

// let newarr = arr.filter(ele => ele % 2 == 0)
// console.log(newarr)



// let arr=[
//     {"id":"1"},
//     {"id":"2"},
//     {"id":"3"},
//     {"id":"4"},
// ]

// arr.forEach(ele=>console.log(ele))


fetch("https://fakestoreapi.com/products")
.then(
   res=>{
     if(!res.ok){
        console.log("something went wrong")
    }
    return res.json();
   }
)
.then(data=>{
    data.forEach((ele,index,ar) => {
        console.log()
    });
})