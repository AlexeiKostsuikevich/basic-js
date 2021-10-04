import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-next':
        i++;
      break;
      case '--discard-prev':
        (newArr.length && arr[i - 2] != '--discard-next') ? newArr.pop(): newArr;
        break;
        case '--double-prev':
          (i > 0 && arr[i - 2] != '--discard-next') ? newArr.push(arr[i - 1]): newArr;
          break;
          case '--double-next':
            (i < arr.length - 1) ? newArr.push(arr[i + 1]): newArr;
            break;
            default:
              newArr.push(arr[i])
    }
  }
  return newArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
