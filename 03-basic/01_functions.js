 function sayMyName(){
    console.log("n");
    console.log("i");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
 }
// sayMyName();

function addTwoNumber(number1, number2){
    let result = number1+number2
    return result;

}

const result = addTwoNumber(4,5)

// console.log("result: ",result);

addTwoNumber(1,"a")


function loginUserMessage(username){

    if (!username) {
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("raj"));



function calculateCartPrice(val1, val2,...num1){
    return num1
} 
console.log(calculateCartPrice(200,400,500,600));

const username={
    firstname:"nikhil",
    lastnmae:"rai"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.firstname} and last name is is ${anyobject.lastnmae}`);
}
handleObject(username)