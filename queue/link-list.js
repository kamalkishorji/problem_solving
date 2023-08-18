class Node {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front == null;
  }

  enQueue(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    }
    this.rear.next = node;
    this.rear = this.rear.next;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Queue underflow");
      return;
    }
    let val = this.front.val;
    this.front = this.front.next;
    return val;
  }
}

const q = new Queue();

console.log(q.isEmpty());

q.enQueue(10);
q.enQueue(20);
q.enQueue(30);
q.enQueue(40);
q.enQueue(50);

console.log(q.isEmpty());

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

q.enQueue(10);
q.enQueue(20);
q.enQueue(30);
console.log(q.deQueue());
console.log(q.deQueue());
