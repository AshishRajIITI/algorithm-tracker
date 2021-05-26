function mySwap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");

    el1.style.width = transform2;
    el2.style.width = transform1;
    
}

async function insertionSort(delay=mainDelay){
    // pause();
    for(var i=0;i<n;i++){

        var key=mainArray[i];
        var j=i-1;
        let el1,el2;        
        
        while(j>=0 && mainArray[j]>key){
            
            el2 = document.querySelector("#id" +j);
            el2.style.background = "red";
            el1=document.querySelector("#id"+ (j+1));
            el1.style.background = "red";
            mainArray[j+1]=mainArray[j];
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

            mySwap(el1,el2);
            j--;
            
        el1.style.background = "blue";
            el2.style.background = "blue";
        }

        mainArray[j+1]=key;                
        
    }
    for(var i=0;i<n;i++){
        document.getElementById("id"+i).style.background = "green";
    }

    // resume();
    console.log(mainArray);
}