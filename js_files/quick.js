function swap(items, leftIndex, rightIndex, el1, el2){

  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("width");
  const transform2 = style2.getPropertyValue("width");

  el1.style.width = transform2;
  el2.style.width = transform1;

    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
 
 function myQuickSort(){
 disable();
 quickSort(mainArray,0, n-1);
 console.log(mainArray);
 resume();
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        
        
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let el1 = document.querySelector("#id"+i);
            let el2 = document.querySelector("#id"+j);
            swap(items, i, j, el1, el2); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

 function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
         quickSort(items, index, right);
        }
    }
    return items;
}
