function merge(arr,l,m,r){
let n1 = m-l+1;
let n2 = r-m;

let left = Array(n1);
let right = Array(n2);

for(let i=0;i<n1;i++){
  left[i] = arr[l+i];
}

for(let i=0;i<n2;i++){
  right[i] = arr[m+i+1];
}

let i = 0, j = 0, k = l;

while(i<n1 && j<n2){
  if(left[i]<right[j]){
    arr[k] = left[i];
    i++;
  }else{
    arr[k] = right[j];
    j++;
  }
  k++;
}

while(i<n1){
  arr[k] = left[i];
  i++;
  k++;
}

while(j<n2){
  arr[k] = right[j];
  j++;
  k++;
}

}

function mergeSort(arr,l,r){
  if(l>=r){
    return;
  }
  let m = Math.floor((l+r)/2);
  mergeSort(arr,l,m);
  mergeSort(arr,m+1,r);
  merge(arr,l,m,r);
}

let arr =  [ 12, 11, 13, 5, 6, 7 ];

mergeSort(arr,0,arr.length-1);

console.log(arr);
