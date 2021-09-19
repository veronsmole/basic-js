import {NotImplementedError} from '../extensions/index.js';

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
    let newArr = [];
    let skipNext = false;
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr)) {
            throw new Error("'arr' parameter must be an instance of the Array!");
        }
        if (skipNext) {
            skipNext = false;
            continue;
        }

        switch (arr[i]) {
            case "--discard-next":
                if (arr[i + 1] !== undefined) {
                    skipNext = true;
                    continue;
                } else continue;

            case "--discard-prev" :
                if (arr[i - 1] !== undefined) {
                    newArr.pop()
                } else continue;
                break;

            case "--double-next" :
                if (arr[i + 1] !== undefined) {
                    newArr.push(arr[i + 1]);
                } else continue;
                break;

            case "--double-prev" :
                if (arr[i - 1] !== undefined) {
                    newArr.push(arr[i - 1]);
                } else continue;
                break;

            default:
                newArr.push(arr[i]);
        }
    }
    return newArr;
}