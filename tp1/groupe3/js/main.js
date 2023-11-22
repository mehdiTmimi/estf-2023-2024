let nbr1Input = document.getElementById("nbr1Input");
let nbr2Input = document.getElementById("nbr2Input");
let btnAdd = document.getElementById("btnAdd");
let btnMinus = document.getElementById("btnMinus");
let btnDivision = document.getElementById("btnDivision");
let btnMultip = document.getElementById("btnMultip");
let liste = document.getElementById("liste");
let btnReset = document.getElementById("btnReset");
const urlServer = "http://100.97.120.50:3000/calculs";
btnReset.addEventListener("click", () => {
  liste.innerHTML = "";
});

btnAdd.addEventListener("click", () => {
  verifyForm(nbr1Input.value, nbr2Input.value, "+");
});
btnMinus.addEventListener("click", () => {
  verifyForm(nbr1Input.value, nbr2Input.value, "-");
});
btnMultip.addEventListener("click", () => {
  verifyForm(nbr1Input.value, nbr2Input.value, "*");
});
btnDivision.addEventListener("click", () => {
  if (nbr2Input.value == 0) return alert("impossible de diviser par 0");
  verifyForm(nbr1Input.value, nbr2Input.value, "/");
});
let verifyForm = (nbr1, nbr2, operation) => {
  if (!nbr1 || !nbr2)
    // if(nbr1=="" || nbr2=="")
    return alert("veuillez remplir tous les champs");
  const ajax = new XMLHttpRequest();
  ajax.open("post", urlServer, true);
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.addEventListener("load", () => {
    if (ajax.status == 201) 
        addHistorique(nbr1, nbr2, operation);
    else 
        alert("probleme");
  });
  let dataToSend = { nbr1, nbr2, operation };
  let DataJson = JSON.stringify(dataToSend);
  ajax.send(DataJson);
};
let addHistorique = (nbr1, nbr2, operation) => {
  let resultat = eval(`(${nbr1})${operation}(${nbr2})`);
  // creation des elements
  let li = document.createElement("li");
  let span = document.createElement("span");
  let spanRes = document.createElement("span");
  let part1 = document.createTextNode(`${nbr1} `);
  //let part2=document.createTextNode(" "+nbr2+" = "+resultat)
  let part2 = document.createTextNode(` ${nbr2} = `);
  spanRes.innerText = resultat;
  let btnDelete = document.createElement("button");
  btnDelete.innerText = "X";
  btnDelete.addEventListener("click", () => {
    li.remove();
  });
  span.innerText = operation;
  li.appendChild(part1);
  li.appendChild(span);
  li.appendChild(part2);
  li.appendChild(spanRes);
  li.appendChild(btnDelete);
  liste.appendChild(li);

  span.classList.add("operation");
  spanRes.classList.add("resultat");
};

const loadCalculs = () => {
  const ajax = new XMLHttpRequest();
  ajax.open("get", urlServer, true);
  ajax.addEventListener("load", () => {
    let data = JSON.parse(ajax.response);
    data.forEach((element) => {
      /*let nbr1 = element.nbr1
            let nbr2 = element.nbr2
            let operation = element.operation*/
      let { nbr1, nbr2, operation } = element; // object destructing
      addHistorique(nbr1, nbr2, operation);
    });
  });
  ajax.send();
};
loadCalculs();
