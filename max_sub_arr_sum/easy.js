// This is o(n^3) solution

function maxSubArrSum(arr){
  let ans = 0;
  let n = arr.length;
  for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      let cur_sum = 0;
      for(let k=i;k<j;k++){
        cur_sum += arr[k];
      }
      ans = Math.max(ans,cur_sum);
    }
   
  }
  return ans;
}

console.log(maxSubArrSum([-2, -3, 4, -1, -2, 1, 5, -3]))
