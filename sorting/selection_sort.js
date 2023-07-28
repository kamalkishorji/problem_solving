function swap(arr,i,j){
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function selectionSort(arr){

  for(let i=0;i<arr.length;i++){
    
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
          swap(arr,i,j);
        }
    }
  }
  return arr;
}

console.log(selectionSort([5,1,2,2,7,6,10,9]))
