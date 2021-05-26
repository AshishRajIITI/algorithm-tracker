function mySwap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");

    el1.style.width = transform2;
    el2.style.width = transform1;

}

async function selectionSort(delay=mainDelay){
  disable();
    for(var i=0;i<n;i++){
        
        var correctIndex=i;
        var x = mainArray[correctIndex]; 
        var el1 = document.querySelector("#id"+i);
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        el1.style.background = "red";
       
        for(var j=i+1;j<n;j++){
            if(x>mainArray[j]){
                correctIndex=j;
                x = mainArray[correctIndex];                        
            }
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        }
        
        var el2 = document.querySelector("#id"+correctIndex);        
        el2.style.background = "red";
                
        mySwap(el1,el2);
        var temp=mainArray[i];
        mainArray[i]=mainArray[correctIndex];
        mainArray[correctIndex]=temp;

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );

        el1.style.background = "blue";
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
    );
        el2.style.background = "blue";
        
        var finalColorChange=(i);

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        
        document.getElementById("id"+finalColorChange).style.backgroundColor = "#10f123";
    }

    resume();
}