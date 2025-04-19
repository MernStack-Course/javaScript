
let counter = document.querySelector('#counter');
let prograssWidth = document.querySelector('.prograss');
let clear = null;
class PrograssBar {
    
    counter = 0

    startPrograss() {
        let processes = ['Testing....', 'Building....', 'Debuging....', 'Deploying....'];
       let  index = 0;
        clear = setInterval(() => {
            if(index >= 100){
                clearInterval(clear)
            }else {
                index++
                counter.innerHTML = processes[index];
                prograssWidth.style.width = `${index}%`;
            }
        }, 5000); 
    }

    restPrograss() {
        let processes = ['Testing....', 'Building....', 'Debuging....', 'Deploying....'];
        let  index = 100;
       clear = setInterval(() => {
           if(index <= 0){
               clearInterval(clear)
           }else {
               index--
               counter.innerText = processes[index];
               prograssWidth.style.width = `${index}%`;
           }
       }, 100); 
   }

    

}

const prograssObject = new PrograssBar()

// access start button 
document.querySelector('.start').addEventListener('click', prograssObject.startPrograss)
document.querySelector('.reset').addEventListener('click', prograssObject.restPrograss)