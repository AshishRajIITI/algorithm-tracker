var mainArray = [];
var n=15;
var mainDelay=10;

function randomNumbers(min, max) {
  return 5 + Math.floor(Math.random() * (max - min));
}
// function update_array_size(){
//   newArray();
// }

// window.onload=update_array_size();

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

// document.getElementsByClassName("button").disabled = true;
// document.getElementsByClassName("button").style.background = "pink";

// }

// function resume(){

  // document.getElementById("newArray").disabled = false;
  // document.getElementById("newArray").style.backgroundColor = "#d8b6ff";
  
  // document.getElementById("bubbleSort").disabled = false;
  // document.getElementById("bubbleSort").style.backgroundColor = "#d8b6ff";
  
  // document.getElementById("selectionSort").disabled = false;
  // document.getElementById("selectionSort").style.backgroundColor = "#d8b6ff";
  
  // document.getElementById("insertionSort").disabled = false;
  // document.getElementById("insertionSort").style.backgroundColor = "#d8b6ff";
  
  // document.getElementById("resume").disabled = false;
  // document.getElementById("resume").style.backgroundColor = "#d8b6ff";
  
  
  // }