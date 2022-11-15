/**
 * Binary Search
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-14
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of BinarySearch
 *
 * @param {number[]} array Newly Generated and Sorted Array
 * @param {number} num Number the program is looking for
 * @param {number} low lowest possible index it can be
 * @param {number} high Highest possible index it can be
 * @returns {number} binarySearch
 */
function binarySearch(array: number[], low: number, high: number, num: number): number{
    if (high >= low) {
        let mid = Math.floor((high + low) / 2)

        if (array[mid] == num) {
            return mid
        } else if (array[mid] > num) {
            return binarySearch(array, low, mid - 1, num)
        } else {
            return binarySearch(array, mid + 1, high, num)
        }
    } else {
        return -1
    }
}



const MIN = 0
const MAX = 999
const ARRAY_SIZE = 250

const randomNumberArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  randomNumberArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumberArray.sort(function (a, b) {
  return a - b
})

// Input
for (let counter = 0; counter < randomNumberArray.length; counter++) {
  process.stdout.write(`${String(randomNumberArray[counter])}, `)
}

console.log('\n')

const numInput = Number(
  prompt(
    "Select a number: "
  )
)

const indexAt = binarySearch(randomNumberArray, MIN, MAX-1, numInput)

console.log(indexAt)
if (indexAt == -1) {
    console.log("Number not in array or invalid input")
} else {
    console.log(
      `Number is at index: ${indexAt}`
    )
}

console.log('\nDone.')
