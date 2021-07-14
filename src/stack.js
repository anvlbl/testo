class Stack {
    constructor() {
      this.content = [];
    }
  
    isEmpty() {
      return this.content.length === 0;
    }
  
    push(x) {
      this.content.push(x);
    }
  
    pop() {
      return this.content.pop();
    }
  
    getContent() {
      return this.content;
    }
};

export default Stack;