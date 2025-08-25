// iife imedeatly invoked function

(function one(){
    console.log(`DB connected`);
})();

( () => {
    console.log(`2 DB connected`);
})(); 