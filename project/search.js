const container  = document.querySelector('.container');
const serachInput = document.getElementById('serach');
const searchBtn = document.getElementById('serachBtn');

let users = [];
// step 1 :  featching the data 
const fetachData = async () => {
    try {
         const response = await fetch('http://localhost:3000/user/all', {
              method:'GET'
         });
         users = await  response.json();
         displayData(users)
    } catch (error) {
        console.log(error)
    }
}
fetachData();

// step 2 : mapping or display the data 
const displayData = (data) => {
   let  userData = Array.from(data);
    if(userData.length > 0){
            container.innerHTML += userData.map((user)=>{
                    return `
                    <li>
                        <span>FirstName: ${user.firstname}</span>
                        <span>Lastname: ${user.lastname}</span>
                        <span>Email: ${user.email}</span>
                        </ br>
                        <img src="http://localhost/images/${user.image_url}"  />
                    </li>
                    `
                })
    }else {
        container.innerHTML = '<p>Sorry result not found </p>'
    }
}

// step 3 : user filtering base on the name, lastname, etc....
const userFilter = () => {
    let filteredUsers = users.filter((user)=>{
         return (
              user.firstname.toLowerCase().includes(serachInput.value.toLowerCase()) ||
              user.lastname.toLowerCase().includes(serachInput.value.toLowerCase())  ||
              user.email.toLowerCase().includes(serachInput.value.toLowerCase()) 
         )
    })  
     container.innerHTML = "";
    displayData(filteredUsers)
}

addEventListener('input', userFilter)
