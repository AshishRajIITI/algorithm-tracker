
function mySwap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("width");
    const transform2 = style2.getPropertyValue("width");

    el1.style.width = transform2;
    el2.style.width = transform1;

}

function quickSort(){

    myQuickSort(mainArray,0,34);

    console.log(mainArray);

}


function myQuickSort(mainArray,low,high){

    if(low<high){
    var p = partitiion(mainArray,low,high);
    myQuickSort(mainArray,low,p-1);
    myQuickSort(mainArray,p+1,high);
    }

}

function partitiion(mymainArray,low,high){
    
    var pivot = mymainArray[high];
    low--;

    for(var j=0;j<high;j++){
        if(mymainArray[j]<pivot){
            low++;
            var temp = mymainArray[low];
            mymainArray[low]=mymainArray[j];
            mymainArray[j]=temp;
            
            let el1 = document.querySelector("#id" + low);
            let el2 = document.querySelector("#id" + j);

            mySwap(el1,el2);
        }
    }
    low++;
    let el1 = document.querySelector("#id" + low);
    let el2 = document.querySelector("#id" + high);
    
    mySwap(el1,el2);
    
    var temp = mymainArray[low];
    mymainArray[low]=pivot;
    pivot=temp;


    return low;

}