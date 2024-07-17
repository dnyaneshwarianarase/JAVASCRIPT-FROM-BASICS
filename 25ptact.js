// function mult(number){
//     for(let i=number;i<=number*10;i=i+number){
//         console.log(i)
//     }

// }
// mult(5)

// function allsum(n){
//     let sum=0;
//     for(i=1;i<=n;i++){
//         sum=sum+i;
        
//     }
//     return sum;
// }


// const cub=(n)=>n*n*n;
// cub(18);

// let array = [1,2,3,4,5,6];

// let print=function(el){
//     console.log(el);
// };
// array.forEach(print)



// let arr=[{
//     name:"dnyaneshwari",
//     classes:"A"
// },{
//     name:"varsha",
//     classes:"B"

// },{
//     name:"chaitanya",
//     class:'C'
// },];
// arr.forEach((student)=>{
//     console.log(student.name);
// });

// let num=[1,2,3,4];
// let double=num.map((el)=>{
//     return el*2;

// })

// let num=[1,2,3,4,5];

// let max=-1;
// for(let i=0;i<=num.length;i++){
//     if(max<num[i]){
//         max=num[i];
//     }
// }
// console.log(max);


// let arr=[12,34,2,5,6,7];

// min=-1;
// for(let i=0;i<=arr.length;i++){
//     if(min<arr[i]){
//         min=arr[i];
//     }
// }
// console.log(min);


// let arr=['a','b','c'];
// let[a,b,c]=arr;


// const student={
//     name:'dnyaneshwari',
//     age:13,
//     class:6,
//     subject:['a','b','c'],
//     username:"dnyanu@123",
//     password:"äbcd"

// };
// // let username=student.username;

// let{username,password}=student;

let arr=[1,2,3,4,5,6];
let square=arr.push((el=>el*el))