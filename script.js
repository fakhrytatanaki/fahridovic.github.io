var navbar = document.querySelector(".navbar") ,
bgnb = document.querySelector(".bgnb"), collapsed = false, suba = document.querySelectorAll(".suba"),
bg = document.querySelector(".bg");
function collapseNavBar()
{
if (collapsed === false)
{navbar.style.width = '200px';navbar.style.backgroundColor="rgba(0,0,0,1)";bgnb.style.opacity="1";collapsed = true;
setTimeout(function(){
  for(var i=0;i<3;i++)

{
suba[i].style.opacity="1";
}

},0)
}
else
{setTimeout(function(){navbar.style.width = '60px';navbar.style.backgroundColor="rgba(0,0,0,0)";bgnb.style.opacity="0";},0);collapsed = false;
for(var i=0;i<3;i++)
{suba[i].style.opacity="0";}
}
}

addEventListener("scroll",function(e){
var yScroll = e.path[1].pageYOffset;
if (yScroll > 400)
{
bg.style.filter="blur(10px)";
}
else {bg.style.filter="blur(0px)";}
})
