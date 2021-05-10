
function mySwap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");

    el1.style.width = transform2;
    el2.style.width = transform1;

}

function bubbleSort() {
  for (var i = 0; i < 34; i++) {
    for (var j = 0; j < 34 - i; j++) {
      var t = j + 1;
      let el1 = document.querySelector("#id" + t);
      let el2 = document.querySelector("#id" + j);

      if (mainArray[t] < mainArray[j]) {
        mySwap(el1,el2);
        var temp = mainArray[t];
        mainArray[t]=mainArray[j];
        mainArray[j]=temp;

      }
    }
  }

  console.log(mainArray);
}
