function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload=function(){
    document.getElementById('img').style.opacity='1';
    document.getElementById('img').style.transform='translate(0,-100);';
    document.getElementById('img2').style.opacity='1';
    document.getElementById('img2').style.transform='translate(0,-100);';
    console.log(Math.floor(Math.random() * 3))
    titlechange();
    bodyappear();
}
function titlechange (){
    document.getElementById("qoute").hidden=false;
    document.getElementById("qoute2").hidden=false;
    const qoutearr=["Welcome!","Hola!","Namaste!","Guten tag!","Olá!","Ciao!"]
    var qn=Math.floor(Math.random() * 6)
    document.getElementById("qoute").innerHTML=qoutearr[qn];
    document.getElementById("qoute2").innerHTML=qoutearr[qn];
}

async function bodyappear(){
    await sleep(500);
    document.getElementById('links').hidden=false;
    document.getElementById('links2').hidden=false;
    document.getElementById('form1').hidden=false;
}