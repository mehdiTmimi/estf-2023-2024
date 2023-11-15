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
    let nom = nomInput.value.trim()
    let prenom = prenomInput.value.trim()
    let age = ageInput.value
    // verification
   if(nom =="" || prenom=="" || age =="")
        return alert("tous les champs sont obligatoires")

    let error = false;
    if(nom.length<3)
    {
        alert("nom minimum 3 caracters")
        error = true
    }
    if(prenom.length<3)
    {
        alert("prenom minimum 3 caracters")
        error = true
    }
    if(age <= 0 || age >=120)
    {
        alert("age must be between 1 and 120")
        error = true
    }

    let expresion =/^[a-zA-Z]{3,}$/ // regexp
    if(!expresion.test(nom))
    {
        alert("nom: only alphnumeric")
        error = true
    }
    if(!expresion.test(prenom))
    {
        alert("prenom: only alphnumeric")
        error = true
    }
    if(!error) // error == false
    ajouter(nom,prenom,age)
})