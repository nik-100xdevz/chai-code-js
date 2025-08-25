const user = {
    email:"nikhil@google.xyz",
    fullname:{
        userfullname:{
            firstname:"nikhil",
            lastname:"rai"
        }
    },
}

// console.log(user.fullname.userfullname);


const course =  {

    coursename:"js",
    price:"45",
    courseInstructer:"hitesh"
}

const {courseInstructer : instructor} = course

console.log(instructor);


// {
//     name:"nikhil",
//     coursename:"js in hindi",
//     price:"free"
// }

// [{},{},{}]

