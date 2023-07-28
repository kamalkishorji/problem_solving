 function swap(arr,i,j){
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function bubbleSort(arr){
  let flag = true;
  for(let i=arr.length-1;i>=0 && flag;i--){
      flag = false;
      for(let j=0;j<i;j++){
        if(arr[j]>arr[j+1]){
          swap(arr,j,j+1);
          flag = true;
        }
      }
  }
  return arr;
}

console.log(bubbleSort([5,1,2,2,7,6,10,9]));
