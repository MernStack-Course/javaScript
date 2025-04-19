// let name ="Ahmad";


// function test(){
//     // let name ="Ali";    
//     console.log(name)
// }

// test()


// function testThis(){
//        console.log(this)
// }
// testThis();
// const sum =  () => {
//     console.log(this) 
// }

// sum();


// const person = {
//     name: 'Ali', 
//     displayName: function (){
//           console.log(this.name)
//     },
//     displayNameArrow: ()=> {
//           console.log(this.name)  
//     }
// }

// person.displayName();
// person.displayNameArrow();



// template 
// Template Literals

// Default Parameters

// Destructuring Assignment

// Spread & Rest Operators

// Enhanced Object Literals

// Classes & Inheritance

///////////////////////////////////////////////////////////
// let id = '34';
// let text = ` 
//     this is you id : ${parseInt(id) == 34 ? "student with id "+ id + " is not valid"  : "welcome to the class"}
// `;

// console.log(text)


// const getDefaultParam = (url = 'http:://localhost:3000/api/v1/demo')=>{
//        if(url != null){
//             console.log("please pass a url to fetch data now I am using default param")
//             return 
//        } 

//        return [
//               {
//                     id: 45, 
//                     name:"En Ahmad", 
//                     age:'19', 
//                     department: 'IS'
//               }
//        ]
// }

// let data  = getDefaultParam();
// console.log(data)
// let arr = [34,56, 677]

// const [first, ,third] = arr
// console.log(first, third)


// const student = {
//         id: '12', 
//         name:'Ali', 
//         department: 'NE', 
//         grade:'A'
// }

// const {id:studentId, name:studentName, department, grade} = student

// console.log("student with studentId:", studentId, ' is ')

// let users = ['ali', 'Noor', "Murtaza"]
// let address = ['Rohullah', 'Mosa', "Kazim"]

// let newarr = [...arr1, ...arr2]
// console.log(newarr)

// const userList = [
//         {
//             id:'34', 
//             name:'ali', 
           
//         },
//         {
//             id:'35', 
//             name:'Rashed',
//         }
// ]

// const userAddress = [
//         {
//             city:'Kabul', 
//             street: '45'
//         }
//         ,
//         {
//             city:'Bamyan', 
//             street: '3'
//         }
// ]


// const fulluserinfo = {...userAddress[0], ...userList[0]}
// console.log(fulluserinfo)


// const add = (numbers) => numbers.reduce((acc, number)=> ( acc + number),0);
// const numbers = [2,3,5,2]
// // console.log(add(numbers))

// const [first, ...rest]  = numbers;
// console.log("first :" , first,  "rest :", rest)

//table:  id, username, email, password, role, isActive, remmeberMe, 

// const userData  = {
//       id: '34', 
//       name: 'Ahmad', 
//       email:'ahmad@gmail.com', 
// }


// const {id, name, email} = userData;

// return {
//     id, 
//     name, 
//     email,
// }




//////////////////////////




// class Person {
    
//     walk(){
//         console.log(" a student can walk as well")
//     }
    
// }


// class Student extends Person {
    
//     constructor(name, id){
//         super();
//         this.id = id;
//         this.name = name; 
//     }

//     displayInfo(){

//          this.takeExam(this.id,this.name)
//     }

    
//     takeExam(id, name){
//           if(id && name){
//             console.log(`student with id: ${id} and with name : ${name} has verified to take exam`)
//           }
//     }

// }


// const studentObject = new Student('ali', 424234)

// studentObject.displayInfo()
// studentObject.walk()




const fetchData = ()=> {
    return new Promise((resolve, reject)=>{
         if(resolve){
            setTimeout(()=>{
                resolve("All the data has been fetched successfully")   
             },2000)
         }else {
            reject("somethign happen wrong please try again")
         }
    })

}


// fetchData().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//       console.log(err)
// })





const getUsers = async ()=>{

    const response = await fetch("url", "method");

    //   console.log("please wait is fetching .....")
    //   fetch('http://localhost:3001/api/users').then().then((data)=>{
    //     console.log(data)
    //     const formatedData = data.json();
    //     console.log(formatedData)
    //   }).catch((err)=>{
    //       console.log("error: ",err)
    //   })
}

getUsers();




