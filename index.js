'use strict'

/**
 * Adds commas to number
 * @param {number} number
 * @param {srting} locale
 * @return {string}
 */
module.exports = function(number, locale){
	return number.toLocaleString(locale);
};