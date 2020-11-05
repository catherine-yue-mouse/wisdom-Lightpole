"use strict";

/**
 * Function that throws an Error(message) if condition is falsy.
 * @param {boolean} condition - The condition, which is checked if falsy
 * (!condition).
 * @param {string} message - The message wich is thrown in an Error if
 * condition is falsy.
 * @return {void}
 */
export default function dm_assert(condition, message) {
  if (!condition) throw new Error(message);
}
//# sourceMappingURL=assert.js.map
