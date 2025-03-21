let vl =0

function inc()
{
   let head = document.getElementById('head')
   vl++
   head.innerHTML = vl

}


function dec()
{
    if(vl!=0){
        let head = document.getElementById('head')
        vl--
        head.innerHTML = vl
    }
   else{
    alert("bus kar ab nahi hoga")
   }
}


function sapodilla()
{
    let image=document.getElementById('img1')
    image.src="download (2).jfif"
}


function orange()
{
    let image=document.getElementById('img1')
    image.src="download (1).jfif"
}



function watermelon()
{
    let image=document.getElementById('img1')
    image.src="Watermelon.webp"
}


function apple()
{
    let image=document.getElementById('img1')
    image.src="download.jfif"
}



function pineapple()
{
    let image=document.getElementById('img1')
    image.src="OIP.jfif"
}