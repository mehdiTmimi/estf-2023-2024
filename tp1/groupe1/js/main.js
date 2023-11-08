//1- on ajoute des ids aux differents balises
//2- on va la recuperer en js
let nomInput = document.getElementById("nomInput")
let prenomInput = document.getElementById("prenomInput")
let ageInput = document.getElementById("ageInput")
let annulerBtn = document.getElementById("annulerBtn")
let ajouterBtn = document.getElementById("ajouterBtn")
let tbody = document.getElementById("tbody")

//3- on creer les fonctions (Traitements)

let vider = ()=>{
    nomInput.value=''
    prenomInput.value=''
    ageInput.value=''
}

let ajouter = (nom,prenom,age)=>{

    // creation dynamique des elements
    let tr = document.createElement("tr")
    let tdNom = document.createElement("td")
    let tdPrenom = document.createElement("td")
    let tdAge = document.createElement("td")
    let tdOptions = document.createElement("td")
    let btnDelete= document.createElement("button")

    // liaison et contenu ( parent.appendChild(fils) + innerText + classList.add)
    tr.appendChild(tdNom)
    tr.appendChild(tdPrenom)
    tr.appendChild(tdAge)
    tr.appendChild(tdOptions)
    tdOptions.appendChild(btnDelete)
    
    tdNom.innerText=nom
    tdPrenom.innerText=prenom
    tdAge.innerText=age
    btnDelete.innerText="X"
    btnDelete.classList.add('delete')
    btnDelete.addEventListener('click',()=>{
        tr.remove()
    })

    tbody.appendChild(tr);
}

annulerBtn.addEventListener('click',()=>{
    vider()
})
ajouterBtn.addEventListener('click',()=>{
    let nom = nomInput.value
    let prenom = prnomInput.value
    let age = ageInput.value
    ajouter(nom,prenom,age)
})