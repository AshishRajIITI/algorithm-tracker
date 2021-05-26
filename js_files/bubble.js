function mySwap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("width");
  const transform2 = style2.getPropertyValue("width");

  el1.style.width = transform2;
  el2.style.width = transform1;
}

async function bubbleSort(delay=mainDelay) {  
  

  var i,j;
  for ( i = 0; i < n; i++) {
    for ( j = 0; j < n-1- i; j++) {
      var t = j + 1;
      let el1 = document.querySelector("#id" + t);
      let el2 = document.querySelector("#id" + j);

      el1.style.background = "red";
      el2.style.background = "red";

      if (mainArray[t] < mainArray[j]) {
        
          await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
          );

        mySwap(el1, el2);
        var temp = mainArray[t];
        mainArray[t] = mainArray[j];
        mainArray[j] = temp;  
      }

      el1.style.background = "blue";
      el2.style.background = "blue";
                    
    }
    document.querySelector("#id" +(n-1-i)).style.background="green";

  }

  console.log(mainArray);
}
