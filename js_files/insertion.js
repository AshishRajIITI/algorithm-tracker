function mySwap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");

    el1.style.width = transform2;
    el2.style.width = transform1;

}

function insertionSort(){

    for(var i=0;i<=34;i++){

        var key=mainArray[i];
        var j=i-1;

        while(j>=0 && mainArray[j]>key){
            var t = j + 1;

            let el1 = document.querySelector("#id" + t);
            let el2 = document.querySelector("#id" + j);
      
            mainArray[t]=mainArray[j];
            mySwap(el1,el2);
            j--;
        }

        mainArray[j+1]=key;                
        
    }

    console.log(mainArray);
}