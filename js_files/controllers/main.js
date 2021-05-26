var mainArray = [];
var n;
var mainDelay=100;


function randomNumbers(min, max) {
  return 5 + Math.floor(Math.random() * (max - min));
}

function newArray() {

var arr_size=document.querySelector("#arr_sz");
n=arr_size.value;
arr_size.addEventListener("input",newArray);

  
  function removeAllChildNodes(parent) {
    mainArray=[];
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const barComponent = document.querySelector("#barComponent");
  removeAllChildNodes(barComponent);

  for (var i = 0; i < n; i++) {
    const x = randomNumbers(5, 100);
    mainArray.push(x);
    var temp = document.createElement("div");
    temp.innerHTML = x;
    temp.id = "id" + i;
    temp.className = "eachBar";
    document.getElementById("barComponent").appendChild(temp);
    var setWidth = document.getElementById("id" + i).innerHTML;
    
       document.getElementById("id" + i).style.width = setWidth * 9 + "px";
       
    temp.innerHTML = "";
  }
}


function fastForward(){
  mainDelay=15;
}
