
let API_key='AIzaSyCpizSmdBU-h9aIzlsQEjAikp2V72bFb2g'

let box=document.getElementById("box")
// let p=document.createElement("p")
// p.innerText="Hello to my world"
// box.append(p)
// for trending video 
let showData=async()=>{
    try{
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${API_key}`)
        let {items}=await res.json()
        append1(items)
        console.log(items);
    }
    catch(error){
        console.log(error);
    }
}
let append1=async(items)=>{
    
   items.forEach(({snippet:{title},id,snippet:{channelTitle}})=>{
    let div=document.createElement("div")
    let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${id}`
         iframe.width='80%'
         iframe.height='75%'
         let title1=document.createElement("h4")
         title1.innerText=title
         let title2=document.createElement("p")
         title2.innerText=channelTitle
         div.append(iframe,title1,title2)
         box.append(div)
        //  console.log();
    
    
   })

}
// for showing search result
showData()

let getData=async()=>{
    try{
        // console.log("bjasdbhs");
        let input=document.getElementById("search").value
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${API_key}&part=snippet&maxResults=20`)
        let {items}=await res.json()
        append(items)
        console.log(items)


    }
    catch(err){

    }
}
let append=async(items)=>{
  box.innerHTML=null
    // let arr=[]

    items.forEach(({snippet:{title},id:{videoId},snippet:{channelTitle}})=>{
        let div=document.createElement("div")
          
        let image=document.createElement("img")
           image.src=`http://img.youtube.com/vi/${videoId}/mqdefault.jpg`
        
        let title1=document.createElement("h4")
        title1.innerText=title
        let title2=document.createElement("p")
        title2.innerText=channelTitle
        div.append(image,title1,title2)
        box.append(div)
        let arr=[]
        div.addEventListener("click",()=>{
            location.href="./video.html"  
             let obj={
                    'snippet12':title,
                    'videoid':videoId
                }
                 arr.push(obj)
               
                    console.log("success")
                    localStorage.setItem("video",JSON.stringify(arr))
            //    location.href="./video.html"  
        })
        
        

    })
}


