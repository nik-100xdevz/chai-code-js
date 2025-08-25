// singleton

// object literls

const mySym =  Symbol("Key1")

const jsUser ={
    name:"nikhil",
    [mySym]:"myKey1",
    age:18,
    location:"india",
    email:"nikhil@google.com",
    isLogedIn:false,
    lastLoginDays:["MOnday","sturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"] );
console.log(jsUser);