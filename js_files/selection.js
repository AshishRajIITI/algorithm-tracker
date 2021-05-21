function mySwap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");

    el1.style.width = transform2;
    el2.style.width = transform1;

}

async function selectionSort(delay=3){

    for(var i=0;i<35;i++){
        
        var correctIndex=i;
        var x = mainArray[correctIndex]; 
       
        for(var j=i+1;j<35;j++){
            if(x>mainArray[j]){
                correctIndex=j;
                x = mainArray[correctIndex];                        
            }
        }

        var el1 = document.querySelector("#id"+i);
        var el2 = document.querySelector("#id"+correctIndex);

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );

        mySwap(el1,el2);
        var temp=mainArray[i];
        mainArray[i]=mainArray[correctIndex];
        mainArray[correctIndex]=temp;

        var finalColorChange=(i);
        document.getElementById("id"+finalColorChange).style.backgroundColor = "green";
    }
    console.log(mainArray);
}