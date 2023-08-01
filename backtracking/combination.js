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
