function showresult() {
alert("i love u too");
}
function runaway(){

    let xspot=Math.random(innerHeight)*1000;
    let yspot=Math.random(innerWidth)*1000;
    console.log(xspot,yspot);
    document.getElementById("no").style.left=yspot+"px";
    document.getElementById("no").style.top=xspot+"px";
}