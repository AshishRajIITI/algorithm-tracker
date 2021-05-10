function mySwap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("width");
  const transform2 = style2.getPropertyValue("width");

  el1.style.width = transform2;
  el2.style.width = transform1;
}

function mergeSort(mainArray) {
  const t = myMergeSort(mainArray);

  console.log(t);
}

const myMergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    left = myMergeSort(arr.slice(0, mid)),
    right = myMergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {

    // let el1 = document.querySelector("#id" + t);
    // let el2 = document.querySelector("#id" + j);

    if (arr1[0] < arr2[0]){
        
     sorted.push(arr1.shift());

    }
    else{
     sorted.push(arr2.shift());
    }

  }

  return sorted.concat(arr1.slice().concat(arr2.slice()));
};
