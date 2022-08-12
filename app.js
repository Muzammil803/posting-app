var mainPost = document.getElementById("main-post")

function back1(){
    var back  = document.getElementById("text")
    back.style.backgroundImage ="url(download.jpg)"
back.style.backgroundRepeat = "no repeat"
back.style.backgroundSize = "cover"
div.style.backgroundImage ="url(download.jpg)"
}

function back2(){
    var back  = document.getElementById("text")
    back.style.backgroundImage ="url(download1.jpg)"
    back.style.backgroundRepeat = "noRepeat"
    back.style.backgroundSize = "cover"
    div.style.backgroundImage ="url(download1.jpg)"



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
if(post.value!=""){
var div1= document.getElementById("div1")
var div2= document.getElementById("div2")
var div3= document.getElementById("div3")
var mainPost = document.getElementById("main-post")
div1.innerHTML=`
<div id="post">
<div id="img"> 
    <img src="166134630_937083870458116_3283763741087398578_n.jpg" alt="">
<p>Muzammil Shah</p>

</div>

<div id="post-text ">

</div>



`

div1,div2.className+="div1 "
div2.appendChild(value)
// var posttext=document.getElementById("post-text")
// posttext.appendChild(value)
// mainPost.appendChild(div1)
// mainPost.appendChild(div2)
console.log(mainPost)
div3.style.display="inline"





// if(backimage==="url(images.jpg)"){
//     mainPost.style.backgroundImage="url(images.jpg)"
// }
}else{
    alert("type something")
}


}



function comment(){
var input = document.getElementById("input")
var send = document.getElementById("send")
input.style.display="inline";
send.style.display="inline";



}
function send (){
    var input = document.getElementById("input")
    var inputval=input.value

if(inputval!=""){
    var commented=document.getElementById("commented")
var final = document.createElement("div")
final.className+="final"
final.innerHTML=`
<div id="post">
<div id="img"> 
    <img src="166134630_937083870458116_3283763741087398578_n.jpg" alt="">
<p>Muzammil Shah</p>

</div>

<div id="post-text ">

</div>



`
var commenttext = document.createElement("div")
commenttext.className+="commenttext"
commenttext.appendChild(document.createTextNode(inputval))
final.appendChild(commenttext)
commented.appendChild(final)
}else{
    alert("type something")
}
}