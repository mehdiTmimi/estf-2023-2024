let resetBtn = document.getElementById("resetBtn")
let baliseInput = document.getElementById("baliseInput")
let contenuInput = document.getElementById("contenuInput")
let colorInput = document.getElementById("colorInput")
let hrefInput = document.getElementById("hrefInput")
let validerBtn = document.getElementById("validerBtn")
let resultatListe = document.getElementById("resultatListe")

let ajouterResultat = (balise,contenu,color,href)=>{
    
    // creation des elements
    let li = document.createElement('li')
    let ele = document.createElement(balise)
    li.appendChild(ele)
    resultatListe.appendChild(li)
    ele.innerText=contenu
    ele.setAttribute("style","color:"+color);
    if(balise=='a')
        {
            ele.setAttribute('href',href)
            ele.setAttribute('target','_blank')
        }
}