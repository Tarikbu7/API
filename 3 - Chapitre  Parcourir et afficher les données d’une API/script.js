let container=document.getElementById("articles")
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(Response=>Response.json())
.then(posts=>{//method when the first task done successfully . run your next function 


let ul=document.createElement("ul")

posts.forEach(post=>{//loop goes through each item and put it inside ul


let li=document.createElement("li")

li.textContent=post.title// make li inside ul simply

ul.appendChild(li)

})

container.appendChild(ul)
})

.catch(error=>{

container="wrooong that cant be right"
console.log(error)

})
