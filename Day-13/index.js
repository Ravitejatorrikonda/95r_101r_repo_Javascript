/**
 * 
 * Promise:-
 * ---------
 * 
 */



// let promise1 = new Promise((resolve, reject) => {
//     reject("Failure");
// });

// promise1.then((res) => console.log(res)).catch((res) => console.error(res))



// const URL = "https://fakestoreapi.com/products";


// fetch(URL).then((res) => res.json())
//     .then((data1) => {
//         for (i = 0; i < data1.length; i++) {
//             console.log(data1[i].rating.count)
//         }
//     })






// fetch(URL).then((res) => res.json())
//     .then((res1) => console.log(res1))
//     .catch((data) => console.log(data))



const URL = "https://dummyjson.com/quotes";

fetch(URL).then((res) => res.json())
    .then((res) =>{
        for(i=0;i<res.quotes.length;i++){
            console.log(res.quotes[i].quote)
        }
    })