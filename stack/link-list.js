class Node{
  constructor(val = 0,next = null){
    this.val = val;;
    this.next = next;
  }
}

class Stack{

  constructor(){
    this.top = null;
  }

  push(val){
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  isEmpty(){
    return this.top === null;
  }

  peek(){
    if(!this.isEmpty()){
      return this.top.val;
    }
    console.log("stack is empty");
    return null;
  }

  pop(){
    if(!this.top){
      console.log("stack is empty");
      return;
    }
    let val =  this.top.val;
    this.top = this.top.next;
    return val;
  }

  display(){
    let s = '';
    let tmp = this.top;
    while(tmp){
      s += tmp.val+ " ";
      tmp = tmp.next;
    }
    console.log(s);
  }
}

const st = new Stack();

console.log(st.isEmpty());
st.pop();

st.push(5);

console.log(st.peek());

st.push(10);
st.push(20);
st.push(30);

st.display();

console.log(st.pop());
console.log(st.peek());
console.log(st.isEmpty());
