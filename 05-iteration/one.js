// / for 

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     // console.log(element);
// }
// for (let i = 0; i <=10; i++) {
//     console.log(`outerlopp ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`innerloop ${j}and inner loop is ${i}`);
        
//     }
    
// }

let myArray=["flash", "batman", "superman"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element); 
}

for (let index = 0; index <=20; index++) {
    if (index == 5) {
        console.log(`dedected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}