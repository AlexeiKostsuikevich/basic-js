import { NotImplementedError } from '../extensions/index.js';
// cons CheckError = require('../extensions/check-error')
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity){
  if(typeof sampleActivity !== Number){
    return false;
  }
  return Math.ceil((Math.log10(MODERN_ACTIVITY / sampleActivity)) / HALF_LIFE_PERIOD / Math.log10(2))
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
