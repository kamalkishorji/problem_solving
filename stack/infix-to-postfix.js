
function prec(c){

  if(c == '^'){

    return 3

  }else if(c == '/' || c == '*'){

    return 2;

  }else if( c == '+' || c == '-'){

    return 1;

  }else{

    return -1;

  }
}


function infixToPostfix(exp){
  const st = [];
  let res = '';

  for(let i = 0; i <  exp.length ; i++){
    const c = exp[i];

    if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
      res += c;
    }

    else if( c == '('){
      st.push(c);
    }

    else if( c == ')'){
      while(st[st.length-1] !== '('){
        let x = st.pop();
        res += x;
      }

      st.pop();
    }

    else{
      while(st.length != 0 && prec(c) <= prec(st[st.length-1])){
        res += st[st.length-1];
        st.pop();
      }
      st.push(c);
    }
  }

  while(st.length != 0){
    res += st[st.length-1];
    st.pop();
  }

  return res;
}

let exp = "a+b*(c^d-e)^(f+g*h)-i";

// ans = abcd^e-fgh*+^*+i-

console.log(infixToPostfix(exp));
