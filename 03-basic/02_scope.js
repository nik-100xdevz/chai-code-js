let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 39;
  // console.log("inner ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "nikhil";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();


if (true) {
    const username = "nikhil"
    if (username === "nikhil") {
        const website =  " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

function addone(num){
    const add = console.log(num+1); 
    return add;
}

addone(5)