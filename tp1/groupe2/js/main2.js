let resetBtn = document.getElementById("resetBtn");
let baliseInput = document.getElementById("baliseInput");
let contenuInput = document.getElementById("contenuInput");
let colorInput = document.getElementById("colorInput");
let hrefInput = document.getElementById("hrefInput");
let validerBtn = document.getElementById("validerBtn");
let resultatListe = document.getElementById("resultatListe");

//traitements
let add = (tag, content, color, hrefAttr) => {
  //creation des elements
  let item = document.createElement("li");
  let balise = document.createElement(tag);
  let deleteBtn = document.createElement("button");

  resultatListe.appendChild(item);
  item.appendChild(balise);
  item.appendChild(deleteBtn);

  balise.innerText = content;
  deleteBtn.innerText = "supprimer";

  balise.setAttribute("style", "color:" + color);
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", () => {
    item.remove();
  });

  if (tag == "a") {
    balise.setAttribute("target", "_blank");
    balise.setAttribute("href", hrefAttr);
  }
};

validerBtn.addEventListener("click", () => {
  let tag = baliseInput.value;
  let content = contenuInput.value;
  let color = colorInput.value;
  let href = hrefInput.value;
  let formValid = true;
  let expressionContent = /^[a-zA-Z ]{5,}$/
  if(!expressionContent.test(content)) // ==false
  {
    contenuInput.classList.add('invalid')
    contenuInput.classList.remove('valid')
    contenuInput.nextElementSibling.innerText="5 caracteres minimum"
    formValid=false
  }
  else
  {
    contenuInput.classList.add('valid')
    contenuInput.classList.remove('invalid')
    contenuInput.nextElementSibling.innerText=""
  }
  //color
  let colorExpression = /^[#][a-fA-F0-9]{6,8}$/
  if(!colorExpression.test(color))
  {
    colorInput.classList.add('invalid')
    colorInput.classList.remove('valid')
    colorInput.nextElementSibling.innerText="hex color is required"
    formValid=false
  }
  else
  {
    colorInput.classList.add('valid')
    colorInput.classList.remove('invalid')
    colorInput.nextElementSibling.innerText=""
  }
  
  if(!formValid)
    return
  add(tag, content, color, href);

  //vider le formulaire
  baliseInput.selectedIndex = 0;

  contenuInput.value = "";
  contenuInput.classList.remove('invalid')
  contenuInput.classList.remove('valid')
  colorInput.nextElementSibling.innerText=""

  colorInput.value = "";
  colorInput.classList.remove('invalid')
  colorInput.classList.remove('valid')
  contenuInput.nextElementSibling.innerText=""
  colorInput.value = "#000000ff";
  hrefInput.value = "";

});
let resetFct = () => {
  [...resultatListe.children].forEach((ele) => ele.remove());
};
resetBtn.addEventListener("click", () => {
  resetFct();
});

baliseInput.addEventListener("change", () => {
  console.log('salut');
  if (baliseInput.value == "a") 
        hrefInput.parentElement.classList.remove("hidden");
   else 
        hrefInput.parentElement.classList.add("hidden");
      
});
add("h1", "salut", "red");
add("h2", "salut", "blue");
add("a", "salut", "blue", "https://www.google.com/");
add("h3", "salut", "gree");

/*
colorInput.addEventListener('keyup',(event)=>{
  console.log(event.key);
  if(event.key=='Enter')
  {
    validerBtn.click()
  }
})
*/
