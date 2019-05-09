/**
 * The function below, given an array of numbers, it returns the count of distinct elements 
 * Time complexity = O(n) ====> Each item in the array is visited once
 * Space complexity = O(n) ===> The lookup table consumes space
 */
let count = 0

function countDistinct(list) {
    let lookup = {}
    list.forEach(x => {
        if(!lookup[x]) {
            // Initialize lookup
            lookup[x] = x
            count++
        }
    })
    return count
}