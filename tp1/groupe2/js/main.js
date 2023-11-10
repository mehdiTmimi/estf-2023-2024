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

  add(tag, content, color, href);

  //vider le formulaire
  tag.selectedIndex = 0;
  content.value = "";
  color.value = "#000000ff";
  href.value = "";
});
let resetFct = () => {
  [...resultatListe.children].forEach((ele) => ele.remove());
};
resetBtn.addEventListener("click", () => {
  resetFct();
});

baliseInput.addEventListener("change", () => {
  if (baliseInput.value == "a") 
        hrefInput.parentElement.classList.remove("hidden");
   else 
        hrefInput.parentElement.classList.add("hidden");
});
add("h1", "salut", "red");
add("h2", "salut", "blue");
add("a", "salut", "blue", "https://www.google.com/");
add("h3", "salut", "gree");
