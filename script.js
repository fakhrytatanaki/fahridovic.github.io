var navbar = document.querySelector(".navbar"),collapsed = false;
function collapseNavBar()
{
if (collapsed === false)
{navbar.style.height = '260px';navbar.style.backgroundColor="rgba(0,0,0,1)";collapsed = true;}
else
{
{navbar.style.height = '60px';navbar.style.backgroundColor="rgba(0,0,0,0)";collapsed = false;}
}
}
