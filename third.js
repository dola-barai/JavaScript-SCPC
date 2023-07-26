function mostFreqElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; 
    }
  
    const frequencyMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
  
    let mostFreqElement;
    let maxFrequency = 0;
  
    for (const element in frequencyMap) {
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFreqElement = element;
      }
    }
    return mostFreqElement;
  }
  
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = mostFreqElement(inputArray);
  console.log(result); 
  