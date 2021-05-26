var mainArray = [];
var n=15;
var mainDelay=5;
var customWidth = 10;

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
    if(window.innerWidth>500){
       document.getElementById("id" + i).style.width = setWidth * (customWidth) + "px";
     }
     else{
      document.getElementById("id" + i).style.width = setWidth * (0.5*customWidth) + "px";
     }
    temp.innerHTML = "";
  }
}


