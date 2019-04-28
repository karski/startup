import _ from "lodash";
import truncate from "./truncate";
import { reverseGeoLocation } from "./geo";

/**
 * Shows deep difference in 2 objects
 *
 * @export
 * @param {Object} object - 1st object
 * @param {Object} base - 2nd object
 * @returns {Object} difference
 */
export function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function(result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(value, base[key])
            : value;
      }
    });
  }
  return changes(object, base);
}

export { truncate, reverseGeoLocation };
