function mySwap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("width");
  const transform2 = style2.getPropertyValue("width");

  el1.style.width = transform2;
  el2.style.width = transform1;
}

async function bubbleSort(delay) {
  // disabled();

  var i,j,k;
  for ( i = 0; i < n; i++) {
    for ( j = 0; j < n-1- i; j++) {
      var t = j + 1;
      let el1 = document.querySelector("#id" + t);
      let el2 = document.querySelector("#id" + j);

      if (mainArray[t] < mainArray[j]) {
        k=j;
          await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        mySwap(el1, el2);
        var temp = mainArray[t];
        mainArray[t] = mainArray[j];
        mainArray[j] = temp;

        el1.style.backgroundColor="yellow";    
      }
      var change = window.getComputedStyle(el1).getPropertyValue("background-color");
     
      if(change==="rgb(255, 255, 0)"){
        var myTimeOut=setTimeout(()=>{
          el1.style.backgroundColor = "blue"; 
        },delay);              
      }
    }
  clearTimeout(myTimeOut);
  var finalColorChange=(n-1-i);
  document.getElementById("id"+finalColorChange).style.backgroundColor = "green";
  }

  clearTimeout(myTimeOut);
  console.log(k);  
  document.getElementById("id"+(k)).style.backgroundColor = "green";
  

  // resume();
  console.log(mainArray);
}
