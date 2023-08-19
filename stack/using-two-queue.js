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
    this.len = 0;
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
    this.len++;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Queue underflow");
      return;
    }
    let val = this.front.val;
    this.front = this.front.next;
    this.len--;
    return val;
  }

  size() {
    return this.len;
  }
}

class Stack{
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(val) {
        if (this.q1.isEmpty()) {
            this.q2.enQueue(val);
        } else {
            this.q1.enQueue(val);
        }
    }

    pop() {
        if (this.q2.isEmpty()) {
            let size = this.q1.size();
            let i = 0;
            while (i < size - 1) {
                this.q2.enQueue(this.q1.deQueue());
                i++;
            }
            return this.q1.deQueue();
        } else {
            let size = this.q2.size();
            let i = 0;
            while (i < size - 1) {
                this.q1.enQueue(this.q2.deQueue());
                i++;
            }
            return this.q2.deQueue();
        }
    }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);

console.log(s.pop());

s.push(10);

console.log(s.pop());