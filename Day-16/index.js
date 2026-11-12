/**
 * DeleteAll,PostAll
 * 
 */


// fetch("http://localhost:3000/products").then(res => res.json())
//     .then(res => console.log(res))


//DELETALL


// const URL = "http://localhost:3000/products";

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         for (i = 0; i < data.length; i++) {
//             fetch(`http://localhost:3000/products/${data[i].id}`, { "method": "DELETE" })
//                 .then(res => {
//                     if (res.ok) {
//                         console.log(res.ok, res.statusText)
//                     }
//                 })
//         }
//     })


//POSTALL


// let data = [

//     {
//         "id": "1",
//         "name": "raju"
//     },

//     {
//         "id": "2",
//         "name": "rahul"
//     },

//     {
//         "id": "3",
//         "name": "sunil"
//     },

//     {
//         "id": "4",
//         "name": "anil"
//     },

//     {
//         "id": "5",
//         "name": "madhu"
//     }

// ]


// for (i = 0; i <= data.length; i++) {
//     let obj = data[i];

//     fetch("http://localhost:3000/products", {
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json"
//         },
//         "body": JSON.stringify(obj)
//     }).then(res => {
//         if (res.ok) {
//             console.log(res.ok, res.statusText)
//         }
//     })
// }


// let arr = ["apple", "banana", "kiwi"]

// arr[1] = "HTML"

// console.log(arr)


// let arr=[1,2,3,4,5]

// arr.splice(1,2,40,30,50)
// console.log(arr)//

// let arr = ["html", "css", "js", "reactjs"]

// console.log(arr.push("SPRING"))


let arr = [10, 20, 30, 40, 50]
arr.copyWithin(0, 2)
console.log(arr)