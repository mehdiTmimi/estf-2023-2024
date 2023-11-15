let nomInput = document.getElementById("nomInput")
let prenomInput = document.getElementById("prenomInput")
let emailInput = document.getElementById("emailInput")
let telephoneInput = document.getElementById("telephoneInput")
let ageInput = document.getElementById("ageInput")
let annulerbtn = document.getElementById("annulerbtn")
let validerBtn = document.getElementById("validerBtn")
let recap = document.getElementById("recap")

let show = (nom,prenom,email,telephone,age)=>{
    recap.innerText = nom + " " + prenom + 
    " " + email + " " + telephone + " "+ age;
}

validerBtn.addEventListener('click',()=>{
    let nom=nomInput.value
    let prenom=prenomInput.value
    let email=emailInput.value
    let telephone=telephoneInput.value
    let age=ageInput.value
    show(nom,prenom,email,telephone,age)
})

nomInput.addEventListener('input',()=>{
    
})