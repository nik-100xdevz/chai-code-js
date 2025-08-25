const user = {
    username : "nikhil",
    price:999,

    wellcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

user.wellcomeMessage()
console.log(this);

function first(){
    let username = "nikhil"
    console.log(this.username );
}

first()


const one = () =>{
    let username = "nikhil"
    console.log(this.username );
}
one()

const myarray =  [1,2,3,4,5,7]

// myarray.forEach(()=>)