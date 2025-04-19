// access methods in dom

// document.getElementById()
let heading1 = document.getElementById('h1');
let heading2 = document.getElementById('h2');
heading1.innerText = "<span>Hello, world</span>"
heading2.innerHTML = "<span>Hello, world</span>"

let headings = document.getElementsByTagName('h1')
let classes = document.getElementsByClassName('main')
// let headingsQuerySelector = document.querySelectorAll('h1')
// classes[1].classList.add("card")
let mainClasses  = document.querySelectorAll(".main");
console.log(mainClasses)



// appling styles
heading1.style.border = "1px solid red"
heading1.style.padding = "10px 20px"


//  appling events
// function showAlert(){
//      alert("Hello, the h1 tag clicked")
// }

// click, mouseover, mouseleave, change, input, keyup, keypress, keydown, scroll, select, 
// heading1.onmouseover = ()=>{
//     heading1.style.backgroundColor = "#fdcede"
// }
// heading1.onmouseleave = ()=>{
//     heading1.style.backgroundColor = ""
// }



//  add class card 
let toggleButton = document.getElementById("toggleButton");

const toggleFun = ()=> {
    classes[1].classList.toggle("card");
}

toggleButton.addEventListener('click', toggleFun)



