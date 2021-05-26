// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
const delay = mainDelay;
async function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  var Lstyle = new Array(n1);
  var Rstyle = new Array(n2);
  let el1, el2, transform1, transform2, style1, style2;
  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) {
    L[i] = arr[l + i];
    el1 = document.querySelector("#id" + (l + i));
    style1 = window.getComputedStyle(el1);
    transform1 = style1.getPropertyValue("width");
    Lstyle[i] = transform1;
  }
  for (var j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
    el2 = document.querySelector("#id" + (m + 1 + j));
    style2 = window.getComputedStyle(el2);
    transform2 = style2.getPropertyValue("width");
    Rstyle[j] = transform2;
  }

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      document.querySelector("#id" + k).style.background = "red";
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      document.querySelector("#id" + k).style.width = Lstyle[i];      
      i++;
    } 
    else {
      arr[k] = R[j];
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      document.querySelector("#id" + k).style.background = "red";
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
      document.querySelector("#id" + k).style.width = Rstyle[j];
     
      j++;
    }
    if(k>0) document.querySelector("#id" + (k-1)).style.background = "blue";
    k++;
  }
  if(k>0) document.querySelector("#id" + (k-1)).style.background = "blue";
  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    document.querySelector("#id" + k).style.width = Lstyle[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    document.querySelector("#id" + k).style.width = Rstyle[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);    
  await mergeSort(arr, l, m);     
  await mergeSort(arr, m + 1, r);   
  await merge(arr, l, m, r);
}

// UTILITY FUNCTIONS
// Function to print an array
async function myMergeSort() {
  await mergeSort(mainArray, 0, n - 1);
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
  for (var i = 0; i < n; i++) {
    document.getElementById("id" + i).style.background = "green";
  }
  console.log(mainArray);
}
