var navbar = document.querySelector(".navbar") ,
bgnb = document.querySelector(".bgnb"), collapsed = false;

function collapseNavBar()
{
if (collapsed === false)
{navbar.style.height = '260px';navbar.style.backgroundColor="rgba(0,0,0,1)";bgnb.style.opacity="0.6";collapsed = true;}
else
{
{navbar.style.height = '60px';navbar.style.backgroundColor="rgba(0,0,0,0)";bgnb.style.opacity="0";collapsed = false;}
}
}
