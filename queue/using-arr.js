class Queue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.arr = Array(size);
    this.capacity = size;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  queueSize() {
    return (this.capacity - this.front + this.rear + 1) % this.capacity;
  }

  enQueue(val) {
    if (this.isFull()) {
      console.log("Queue overflow");
    } else {
      this.rear = (this.rear + 1) % this.capacity;
      this.arr[this.rear] = val;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Queue underflow");
      return;
    }
    const val = this.arr[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    return val;
  }
}

const q = new Queue(5);

console.log(q.isEmpty());
console.log(q.isFull());

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.enQueue(5);
q.enQueue(6);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

q.enQueue(10);
q.enQueue(10);
q.enQueue(10);
q.enQueue(10);
q.enQueue(10);
q.enQueue(10);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
