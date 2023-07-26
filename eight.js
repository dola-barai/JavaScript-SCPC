function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return null; 
    }
    const sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr[1];
  }
  
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findSecondSmallest(inputArray);
  console.log(result); 
  