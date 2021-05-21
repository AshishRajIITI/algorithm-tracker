var mainArray = [];
var n=15;
var mainDelay=1500;

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
  }
}

// function pause(){

// document.getElementById("newArray").disabled = true;
// document.getElementById("newArray").style.backgroundColor = "pink";

// document.getElementById("bubbleSort").disabled = true;
// document.getElementById("bubbleSort").style.backgroundColor = "pink";

// document.getElementById("selectionSort").disabled = true;
// document.getElementById("selectionSort").style.backgroundColor = "pink";

// document.getElementById("insertionSort").disabled = true;
// document.getElementById("insertionSort").style.backgroundColor = "pink";

// document.getElementById("resume").disabled = true;
// document.getElementById("resume").style.backgroundColor = "pink";

// document.getElementById("pause").disabled = false;
// document.getElementById("pause").style.backgroundColor = "yellow";  

// }

// function resume(){

//   document.getElementById("newArray").disabled = false;
//   document.getElementById("newArray").style.backgroundColor = "#d8b6ff";
  
//   document.getElementById("bubbleSort").disabled = false;
//   document.getElementById("bubbleSort").style.backgroundColor = "#d8b6ff";
  
//   document.getElementById("selectionSort").disabled = false;
//   document.getElementById("selectionSort").style.backgroundColor = "#d8b6ff";
  
//   document.getElementById("insertionSort").disabled = false;
//   document.getElementById("insertionSort").style.backgroundColor = "#d8b6ff";
  
//   document.getElementById("resume").disabled = false;
//   document.getElementById("resume").style.backgroundColor = "#d8b6ff";
  
//   document.getElementById("pause").disabled = true;
//   document.getElementById("pause").style.backgroundColor = "yellow";
  
//   }