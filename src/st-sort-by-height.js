import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    let newArr = [];
    let positions = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            newArr.push(arr[i])
        } else {
            positions.push(i);
        }
    }
    newArr.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < positions.length; i++) {
        newArr.splice(positions[i], 0, -1)
    }
    return newArr;
}