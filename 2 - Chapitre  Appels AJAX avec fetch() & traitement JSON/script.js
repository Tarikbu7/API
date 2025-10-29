fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(data=>{


console.log("right infos" , data)

})

.catch(error=>{

console.error("wrong not working" , error)


})