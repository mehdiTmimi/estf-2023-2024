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
let vider = ()=>{
    // vider les inputs
    document.querySelectorAll(".inputSection input").
    forEach(element=>{
        element.value=""
        element.classList.remove("valid","error")
        element.nextElementSibling.innerText=""
    })
    // effacer les styles et les textes dess erreurs
}

validerBtn.addEventListener('click',()=>{
    let nom=nomInput.value
    let prenom=prenomInput.value
    let email=emailInput.value
    let telephone=telephoneInput.value
    let age=ageInput.value
    show(nom,prenom,email,telephone,age)
    // vider
})

document.querySelectorAll(".inputSection input")
.forEach(input=>{
    input.addEventListener('input',()=>{
        let expression = new RegExp(input.getAttribute("expression"))
        if(expression.test(input.value.trim()) == false){
            input.classList.add("error")
            input.classList.remove("valid")
            input.nextElementSibling.innerText = 
            input.getAttribute("messageErreur")
        }
        else{
            input.classList.add("valid")
            input.classList.remove("error")
            input.nextElementSibling.innerText=""
        }
        if(document.querySelectorAll
        ('.inputSection input[class="valid"]').length==5)
            return validerBtn.removeAttribute("disabled")
        validerBtn.setAttribute("disabled","");
    })
})
