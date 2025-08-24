let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date ("01-12-2025")

let myTimeStampDate = Date.now()

console.log(myTimeStampDate);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));