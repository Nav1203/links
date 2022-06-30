function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload=function(){
    document.getElementById('img').style.opacity='1';
    document.getElementById('img').style.transform='translate(0,-100);';
    console.log(Math.floor(Math.random() * 3))
    titlechange();
    bodyappear();   
}
function titlechange (){
    document.getElementById("qoute").hidden=false;
    const qoutearr=["Welcome!","Hola!","Namaste!"]
    var qn=Math.floor(Math.random() * 3)
    document.getElementById("qoute").innerHTML=qoutearr[qn];
}

async function bodyappear(){
    await sleep(500);
    document.getElementById('links').hidden=false;
}