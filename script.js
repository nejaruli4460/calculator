function dis(val){
    let x=document.getElementById("result")
    x.value+=val;
    x.style.backgroundColor="white";
    x.style.color="black";
}
function solve()
{
    let x=document.getElementById("result").value;
    document.getElementById("history").value+=x;
    let y=eval(x);
    document.getElementById("history").value+='='+y+' ';
    document.getElementById("result").value=y;
    document.getElementById("result").style.backgroundColor="#33FFCB";
    document.getElementById("result").style.color="white";

}
function clr()
{
    document.getElementById("result").value="";
    document.getElementById("result").style.backgroundColor="#FFC933";
}
function hisclr(){
    document.getElementById("history").value="";
}
function hist(){
    document.getElementById("main").style.display="none";
    document.getElementById("hist").style.display="block";

}
function back(){
    document.getElementById("main").style.display="block";
    document.getElementById("hist").style.display="none";

}
