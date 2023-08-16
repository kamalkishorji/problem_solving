//Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].You may return the answer in any order.

// Time complexity - (O(C(n, k)*k))  space - o(k)
const combine = function(n, k) {
  const res = [];
  backtrack(n,k,1,[],res);
  return res;
};

function backtrack(n,k,st,comb,res){
  if(comb.length == k){
      res.push([...comb]);
      return;
  }
  for(let i=st;i<=n;i++){
      comb.push(i);
      backtrack(n,k,i+1,comb,res);
      comb.pop();
  }
}

console.log(combine(4,2));
