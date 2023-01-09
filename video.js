
let res=JSON.parse(localStorage.getItem("video"))

let box2=document.getElementById("show")

console.log(res.videoid)
res.forEach((el)=>{
 console.log(el.videoid)
 let id=el.videoid
 let iframe=document.createElement("iframe")
iframe.src=`https://www.youtube.com/embed/${id}`
         iframe.width='80%'
         iframe.height='75%'
box2.append(iframe)
})
