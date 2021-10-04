import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
}
export default {
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    value = `(${value})`;
    this.chain.push(value);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(typeof position !== 'number' || position < 1 || this.chain[position] === undefined){
      this.chain = [];
      throw new Error('Error!');
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
