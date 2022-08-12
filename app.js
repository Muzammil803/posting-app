var mainPost = document.getElementById("main-post")

function back1(){
    var back  = document.getElementById("text")
    back.style.backgroundImage ="url(download.jpg)"
back.style.backgroundRepeat = "no repeat"
back.style.backgroundSize = "cover"
mainPost.style.backgroundImage ="url(download.jpg)"
}

function back2(){
    var back  = document.getElementById("text")
    back.style.backgroundImage ="url(download1.jpg)"
    back.style.backgroundRepeat = "noRepeat"
    back.style.backgroundSize = "cover"
    mainPost.style.backgroundImage ="url(download1.jpg)"



}
function back3(){
    var back  = document.getElementById("text")
   var backimage= back.style.backgroundImage ="url(images.jpg)"
    back.style.backgroundRepeat = "no repeat"
    back.style.backgroundSize = "cover"
    mainPost.style.backgroundImage ="url(images.jpg)"



}
function back4(){
    var back  = document.getElementById("text")
    back.style.backgroundImage ="url(image1.jpg)"
    back.style.backgroundRepeat = "no repeat"
    back.style.backgroundSize = "cover"
mainPost.style.backgroundImage ="url(image1.jpg)"
}
function back5(){
    var back  = document.getElementById("text")
    back.style.backgroundImage ="url(white.jpg)"
    back.style.backgroundRepeat = "no repeat"
    back.style.backgroundSize = "cover"
    mainPost.style.backgroundImage ="url(white.jpg)"


}

function apply(){
var post = document.getElementById("text")
var value= document.createTextNode(post.value)
var div= document.createElement("div")
var mainPost = document.getElementById("main-post")
div.innerHTML=`
<div id="post">
<div id="img"> 
    <img src="166134630_937083870458116_3283763741087398578_n.jpg" alt="">
<p>Muzammil Shah</p>

</div>

<div id="post-text ">

</div>



`

div.className+="div1 "
div.appendChild(value)
// var posttext=document.getElementById("post-text")
// posttext.appendChild(value)
mainPost.appendChild(div)
console.log(mainPost)






// if(backimage==="url(images.jpg)"){
//     mainPost.style.backgroundImage="url(images.jpg)"
// }

}