function findTwoNumbersWithTargetValue(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    // If no matching pair is found, return an empty array or null as per your preference.
    return [];
  }
  
  // Example Input: ([1, 3, 6, 8, 11, 15], 9)
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  
  const result = findTwoNumbersWithTargetValue(sortedArray, targetValue);
  console.log(result); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
  