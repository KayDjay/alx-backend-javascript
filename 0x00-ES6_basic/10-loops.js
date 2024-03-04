export default function appendToEachArrayValue(array, appendString) {
    const resultArray = []; // Create a new array to avoid modifying the original
  
    for (let value of array) {
      resultArray.push(appendString + value);
    }
  
    return resultArray;
  }