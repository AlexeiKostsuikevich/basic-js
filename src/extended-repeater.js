import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if(srt != null){
    str = str.toString();
  }
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  let repeatStr = '';
  for(let i = 0; i < repeatTimes; i++){
    repeatStr += str;
    if(addition !== undefined){
    if(addition !== null){
      addition = addition.toString();
    }
    repeatStr += addition;
    for(let i = 1;
      i < additionRepeatTimes;
      i++){
        repeatStr += `${additionSeparator}${addition}`;
      }
  }
  if(i < repeatTimes -1){
    repeatTimes += separator;
  }
}
return repeatStr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
