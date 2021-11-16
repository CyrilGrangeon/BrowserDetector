let userAgent=navigator.userAgent; //navigator est un objet qui contient des informations à propos du navigateur
//console.log(userAgent);
let browser;
if(userAgent.match(/edg/i)){
browser="edge";
}else if(userAgent.match(/firefox|fxios/i)){
browser="firefox";
}else if(userAgent.match(/opr/i)){
browser="opera";
}else if(userAgent.match(/chrome|chromium|vrios/i)){
browser="chrome";
}else if(userAgent.match(/safari/i)){
browser="safari";
}else{
    alert("La detection a échoué !!!")
}

console.log(browser)

const BROWSER = document.querySelector(`.${browser}`)
BROWSER.classList.add("isSelected");
