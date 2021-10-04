import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  };
  try {
    date.toJSON()
  } catch (e) {
    throw new Error(e)
  }
  let month=['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter'];
  return month[date.getMonth()];
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
