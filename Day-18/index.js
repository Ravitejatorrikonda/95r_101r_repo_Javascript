/**
 * async & await:-
 * ----------------
 * it is used to perform asynchronus operations
 * 
 * 
 * 
 * 
 */



// function print() {
//     return new Promise((res,rej)=>{
//         res("success")
//     })
// }

// print().then(res=>console.log(res))



// async function print() {
//    let res= await "hello there";
//    console.log(res)
// }

// print()




// let data = ["hello", "hi"]

// async function x() {
//     let res=await data;
//       res.forEach(ele=>console.log(ele))
// }
// x()




// async function fetchData() {
//     let res = await fetch("http://localhost:3000/products")
//     let data=await res.json();
//     data.forEach(ele => {
//         console.log(ele)
//     });
// }
// fetchData();



const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function fetchData() {
    let res = await fetch(URL)
    let data = await res.json();
    data.moves.forEach(element => {
        console.log(element)
    });

}
fetchData();