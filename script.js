function dis(val){
    let x=document.getElementById("result")
    x.value+=val;
    x.style.backgroundColor="white";
    x.style.color="black";
}
function solve()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
    document.getElementById("result").style.backgroundColor="#33FFCB";
    document.getElementById("result").style.color="white";
}
function clr()
{
    document.getElementById("result").value="";
    document.getElementById("result").style.backgroundColor="#FFC933";
}