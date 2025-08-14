function twoSum(nums, target) {
    const numMap = new Map();

    for ( let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    return [];
};



// Test usage
console.log(twoSum([2, 7, 11, 15], 9));    // Expected output: [0, 1]
console.log(twoSum([3, 2, 4], 6));         // Expected output: [1, 2]
console.log(twoSum([3, 3], 6));            // Expected output: [0, 1]



/**
 * twoSum - Find the indices of two numbers in an array that add up to the target.
 *
 * Approach:
 * 1. Create a Map to store numbers and their indices for quick lookup.
 * 2. Loop through the array:
 *    - Calculate the complement: target - current number.
 *    - If the complement exists in the Map, return the stored index and current index.
 *    - Otherwise, store the current number with its index in the Map.
 * 3. If no pair is found, return an empty array.
 *
 * Time Complexity: O(n) — Each element is processed at most twice (once in the loop, once in Map lookup).
 * Space Complexity: O(n) — Map may store up to n elements in the worst case.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] // because nums[0] + nums[1] = 2 + 7 = 9
 */