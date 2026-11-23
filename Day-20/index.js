/**
 * 
 * DOM:-
 * -----
 * 
 * 
 * 
 */




// let div1 = document.createElement("div")
// div1.innerText = "<i style='color:red'>Hello there</i>";

// document.body.appendChild(div1)
// console.log(div1)


// let div2 = document.createElement("div")
// div2.innerHTML = "<i style='color:red'>Hai guys</i>"
// document.body.appendChild(div2)
// console.log(div2)



// let div=document.createElement("div")
// div.id="main"
// div.className="container"
// div.setAttribute("name", "main1")
// console.log(div)


// let arr=["html","css","js","react"]
// let div=document.createElement("div")
// arr.forEach(ele=>{
//     let item=document.createElement("div")
//     item.innerHTML=ele;
//     div.appendChild(item)
// })

// document.body.appendChild(div)















// let div=document.createElement("div");
// arr.forEach(ele=>{
//     div.innerHTML+=ele
// })
// document.body.appendChild(div)





// let arr = [
//     {
//         "id": "1",
//         "name": "surya"
//     },
//     {
//         "id": "2",
//         "name": "arya"
//     },
//     {
//         "id": "3",
//         "name": "jai"
//     },
// ]



// let div=document.createElement("div")
// arr.forEach(ele=>{
//     let item=document.createElement("div")
//     item.innerHTML=`
//     <h3>Id :${ele.id}</h3>
//     <h4>Name : ${ele.name}</h4> 
//     `
//     div.append(item)

// })

// document.body.append(div)

const URL = "http://localhost:3000/products";


let div = document.createElement("div")
div.id = "main"

async function fetchData() {

    let res = await fetch(URL)
    let data = await res.json();
    showData(data);
}

function showData(data) {
    data.forEach(ele => {
        let item = document.createElement("div")
        item.innerHTML = `
        <h3>Id : ${ele.id}<h3>
        <h4>Name : ${ele.name}</h4>
        <img src='${ele.image}'>
        <button>click me</button>
        `
        div.appendChild(item)
    });

}
document.body.append(div)


fetchData()