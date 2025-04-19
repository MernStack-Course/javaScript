import loader, { fetchData } from "./ES6/module.js";
const API_URL =  'https://jsonplaceholder.typicode.com/photos'

const wrapper_div = document.querySelector('.wrapper');


const data = await fetchData(API_URL)
Array.from(data).map((imag)=> {
   const img = document.createElement('img');
   wrapper_div.innerHTML += imag.title;
})





  





