
function isBracketBalanced(exp){
  const st = [];

  for(let i = 0; i < exp.length ;i++){
    const ch = exp[i];

    if( ch == '(' || ch == '{' || ch == '['){
      st.push(ch);
      continue;
    }

    if(st.length == 0){
      return false;
    }

    let check ;

    switch (ch) {
      case ')':
        check = st.pop();
        if(check == '{' || check == '[') return false;
        break;
    
      case '}' : 
      check = st.pop();
      if( check == '(' || check == '[') return false;
      break;

      case ']':
        check = st.pop();
        if(check == '(' || check == '{') return false;
        break;
    }
  }

  return st.length == 0;
}

let exp = "([{}])("
let ans = isBracketBalanced(exp);
console.log(ans);
