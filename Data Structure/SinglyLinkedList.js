// Each element of a Linked List is called a Node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push means adding a new node to the tail.
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // We will add the new node as the next element of current tail
      this.tail.next = newNode;
      // Then we will change the current tail to newNode
      this.tail = newNode;
    }
    this.length++;
    // Returning `this` helps us chaining push method
    return this;
  }
  // Pop means removing the tail node.
  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTailNode = currentNode;

    while (currentNode.next) {
      newTailNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTailNode;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  // Shift means removing the head node.
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Unshift means add a new node before the head and making the new node the new head
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get means we will fetch the node at that index, which is passed to this function
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  // Set means this function will accept a new value and an index and update the value at that index
  set(index, val) {
    let currentNode = this.get(index);
    if (!currentNode) return false;

    currentNode.val = val;
    return true;
  }
  // Insert means a new node will be added at the index passed to the function
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return this.push(val);
    } else if (index === 0) {
      return this.unshift(val);
    } else {
      const newNode = new Node(val);
      const previousNode = this.get(index - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
    }
    return true;
  }
  // Remove means we can remove the node at the index passed to the function
  remove() {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length) {
      return this.pop();
    } else {
      previousNode = this.get(index - 1);
      currentNode = previousNode.next;
      previousNode.next = currentNode.next;
      this.length--;
      return currentNode;
    }
  }
  // Reverse means we will reverse the Linked List
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
