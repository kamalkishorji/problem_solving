class Node{
  constructor(val){
    this.val = val?val:0;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printList(){
    let st = '';
    let node = this.head;
    while(node){
      st += node.val+" ";
      node = node.next;
    }
    console.log(st);
  }

  //This method insert a node at end
  push(val){
    let node = new Node(val);

    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  insert(pos,val){
    let newNode = new Node(val);

    //Insert at begining
    if(pos == 1){
     newNode.next = this.head;
     if(this.head){
      this.head.prev = newNode;
     }
     this.head = newNode;
     return;
    }

    let tmp = this.head;
    let k = 1;

    while( k < pos-1 && tmp.next){
      k++;
      tmp = tmp.next;
    }
    newNode.next = tmp.next;
    newNode.prev = tmp;
    if(tmp.next){
      tmp.next.prev = newNode;
    }
    tmp.next = newNode;
    return;
  }

  delete(pos){
    if(!this.head) return undefined;

    if(pos == 1){
      this.head = this.head.next;
     if(this.head){
      this.head.prev = null;
     }
     return;
    }

    let k = 1;
    let tmp = this.head;
    while(k < pos && tmp.next){
      tmp = tmp.next;
      k++;
    }
    let prev = tmp.prev;
    prev.next = tmp.next;
    if(tmp.next){
      tmp.next.prev = prev;
    }
    return;
  }
}

let dl = new DoublyLinkList();
dl.push(1);
dl.push(2);
dl.push(3);
dl.push(4);
dl.printList();
dl.insert(1,10);
dl.printList();
dl.insert(4,20);
dl.printList();
dl.insert(7,70);
dl.printList();
dl.delete(1);
dl.printList();
dl.delete(3);
dl.printList();
dl.delete(5);
dl.printList();
