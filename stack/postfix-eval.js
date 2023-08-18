function evaluatePostFix(exp) {
  const st = [];

  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];

    if (!isNaN(parseInt(c))) {
      st.push(parseInt(c));
    } else {
      const x = st.pop();
      const y = st.pop();

      switch (c) {
        case "+":
          st.push(x + y);
          break;

        case "-":
          st.push(y - x);
          break;

        case "*":
          st.push(y * x);
          break;

        case "/":
          st.push(y / x);
          break;
      }
    }
  }
  return st.pop();
}

const exp = "231*+9-";

const ans = evaluatePostFix(exp);

console.log(ans);
