//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  function newAscendingArray(arr){
    let sortedArray=[];
    // let count=arr.length;
    for (let i=0; arr.length>0; i++){
    let minNumber=findMinValue(arr);
    sortedArray.push(minNumber);
    arr.splice(arr.indexOf(minNumber), 1);
    }
    return sortedArray;
    }

    console.log(newAscendingArray(nums1));
    console.log(newAscendingArray(nums2));
    console.log(newAscendingArray(nums3));
    nums1 = [5, 10, 2, 42];
    console.log(nums1.sort());
    console.log(nums1.sort().reverse());

//Sort each array in decending order.
nums1 = [5, 10, 2, 42];
nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function findMaxValue(arr){
    let max = arr[0];
    for (i = 0; i<arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }
  
  function newDecendingArray(arr){
    let sortedArray=[];
    // let count=arr.length;
    for (let i=0; arr.length>0; i++){
    let maxNumber=findMaxValue(arr);
    sortedArray.push(maxNumber);
    arr.splice(arr.indexOf(maxNumber), 1);
    }
    return sortedArray;
    }
    

    console.log(newDecendingArray(nums1));
    console.log(newDecendingArray(nums2));
    console.log(newDecendingArray(nums3));



    nums1 = [5, 10, 2, 42];
    nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
    nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
    console.log(nums1.sort(function (a, b){return a-b}));
    console.log(nums2.sort(function (a, b){return a-b}));
    console.log(nums3.sort(function (a, b){return a-b}));
    console.log(nums1.sort(function (a, b){return b-a}));
    console.log(nums2.sort(function (a, b){return b-a}));
    console.log(nums3.sort(function (a, b){return b-a}));
    
  