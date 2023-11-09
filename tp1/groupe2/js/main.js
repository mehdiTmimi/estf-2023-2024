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

validerBtn.addEventListener('click',()=>{
    // recuperation des valeurs .value
    let balise = baliseInput.value
    let contenu = contenuInput.value
    let color = colorInput.value
    let href = hrefInput.value
    //verification (TODO)
    // appel a la fonction ajouterResultat
    ajouterResultat(balise,contenu,color,href)
    // vider le formulaire
    baliseInput.selectedIndex=0
    contenuInput.value=""
    colorInput.value="#000000"
    hrefInput.value=""
})
let resetFct = ()=>{
    resultatListe.innerHTML=""
}
resetBtn.addEventListener('click',()=>{
    resetFct()
})