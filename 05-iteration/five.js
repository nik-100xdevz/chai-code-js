const codeing =["js","java","cpp","ruby"]

codeing.forEach(function(items,index,arr) {
    console.log(items,index,arr);
});

const myCoding = [
    {
        languageName:"javascript",
        filename:"js"
    },
    {
        languageName:"java",
        filename:"java"
    },
    {
        languageName:"cpp",
        filename:"c++"
    }
]

myCoding.forEach((items)=>{
    
    console.log(items.languageName);
})