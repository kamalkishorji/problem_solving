class Node{
  constructor(val){
    this.val = val ? val: 0;
    this.next = null;
  }
}

class SingleLinkList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // This method prints the link list
  printList(){
    let str = '';
    let cur = this.head;
    while(cur){
      str += cur.val+" ";
      cur = cur.next;
    }
    console.log(str);
  }

  //This method insert a node at end
  push(val){
    let node = new Node(val);

    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }else{
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }


  //This method delete last element of link list
pop(){

  if(!this.head){

    return undefined;

  }

  let cur = this.head;
  let newTail = cur;

  while(cur.next){
    newTail = cur;
    cur = cur.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;

  if(this.length == 0){
    this.head = null;
    this.tail = null;
  }

  return cur
}

//This method delete the first node and returns its value
shift(){

  if(!this.head){
    return undefined;
  }

  let curH = this.head;
  this.head = curH.next;
  this.length--;

  if(this.length == 0){
    this.tail = null;
  }

  return curH
}

//This method insert a node at begining 
unshift(val){
let node = new Node(val);

if(!this.head){
  this.head = node;
  this.tail = this.head;
}
node.next = this.head;
this.head = node;
this.length++;

return this;
}

//This method find node at given index and returns
get(idx){

  if(idx < 0 || idx >= this.length ){
    return null;
  }

  let counter = 0 ;
  let cur = this.head;

  while(counter !== idx){
    counter++;
    cur = cur.next;
  }

  return cur;
}

//This method find a node at given index and set the value;
set(idx,val){
  let node = this.get(idx);

  if(node){
    node.val = val;
    return true;
  }
  return false;
}

//This method insert a new node at given position
insert(pos,val){

  if(pos<0 || pos > this.length) return false;

  if(pos == this.length) return !!this.push(val);

  if(pos == 0) return !!this.unshift(val);

  let node = new Node(val);
  let prev = this.get(pos-1);
  let tmp = prev.next;
  prev.next = node;
  node.next = tmp;
  this.length++;
  return true;
}

//This method remove the node at given position
remove(pos){

  if(pos < 0 || pos >= this.length) return undefined;

  if(pos == this.length-1) return this.pop();

  if(pos == 0) return this.shift();

  let prev = this.get(pos-1);
  let removed = prev.next;
  prev.next = removed.next;
  this.length--;
  return removed;
}

// This method reverse the link list
reverse(){
  let prev = null;
  let cur = this.head;
  while(cur){
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
 this.head = prev;
}
}



let ll = new SingleLinkList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.printList();
ll.reverse()
ll.printList();
