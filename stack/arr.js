class Stack{
  constructor(){
    this.arr = [];
  }

  push(val){
    this.arr.push(val);
  }

  pop(){
    if(this.arr.length > 0){
      return this.arr.pop();
    }
    console.log("Underflow");
    return null;
  }

  peek(){
    if(this.arr.length > 0){
      return this.arr[this.arr.length-1];
    }
    console.log("underflow");
    return null;
  }

  isEmpty(){
    return this.arr.length === 0;
  }

  printStack(){
    console.log(this.arr);
    
  }
}

const st = new Stack();

console.log(st.isEmpty());

st.pop();
st.peek();

st.push(1);
st.push(2);
st.push(3);

st.printStack();

console.log(st.pop());

st.printStack();

console.log(st.peek());
