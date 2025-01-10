let on=document.getElementById("on")
let off=document.getElementById("off")
let bulbImage=document.getElementById("bulboff")

on.addEventListener('click',()=>{
    bulbImage.src="onB.png"
    
})

function offimage()
{
    bulbImage.src="offB.png"
    
}

// off.addEventListener('click',offimage)