/**
 * http methods
 * -------------
 * 
 * GET,POST,PUT,PATCH,DELETE
 * 
 * 
 */


// const URL="https://fakestoreapi.com/products";

// fetch(URL)
// .then((res)=>res.json())
// .then((res)=>console.log(res))



// fetch(`http://localhost:3000/products`)
// .then((res)=>res.json())
// .then((res)=>console.log(res))




fetch("http://localhost:3000/products/3", {
    "method": "DELETE"
}).then((res) => {
    if (res.ok) {
        console.log(res.statusText, res.status)
    }
})