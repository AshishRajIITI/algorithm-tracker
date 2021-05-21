var mainArray = [];

function randomNumbers(min, max) {
  return 5 + Math.floor(Math.random() * (max - min));
}

function newArray() {
  
  function removeAllChildNodes(parent) {
    mainArray=[];
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const barComponent = document.querySelector("#barComponent");
  removeAllChildNodes(barComponent);

  for (var i = 0; i < 35; i++) {
    const x = randomNumbers(5, 100);
    mainArray.push(x);
    var temp = document.createElement("div");
    temp.innerHTML = x;
    temp.id = "id" + i;
    temp.className = "eachBar";
    document.getElementById("barComponent").appendChild(temp);
    var setWidth = document.getElementById("id" + i).innerHTML;
    document.getElementById("id" + i).style.width = setWidth * 10 + "px";
  }
}

function disabled(){

document.getElementById("newArray").disabled = true;
document.getElementById("newArray").style.backgroundColor = "#d8b6ff";

}