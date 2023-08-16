// This is o(n^3) solution

function maxSubArrSum1(arr){
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


//This is o(n^2) solution
function maxSubArrSum2(arr){
  let ans = 0;
  let n = arr.length;
  for(let i=0;i<n;i++){
    let sum = 0;
    for(let j=i;j<n;j++){
      sum += arr[j];
      ans = Math.max(ans,sum);
    }
  }
  return ans;
}

// This is o(n) solution -----> Kadane’s algorithm.
function maxSubArrSum3(arr){
  let ans = 0, sum = 0;
  for(let i=0;i<arr.length;i++){
    sum = Math.max(arr[i],sum+arr[i]);
    ans = Math.max(ans,sum);
  }
  return ans;
}
console.log(maxSubArrSum3([-2, -3, 4, -1, -2, 1, 5, -3]))
