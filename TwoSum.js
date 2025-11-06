//Given an array of integers numbers and an integer target, return the index of two numbers such that they add up to target. If there is no solution then return undefined.

//You may assume that each input would have exactly one solution, and you may not use the same element twice. If there is no solution then return undefined.


const twoSum = (arr, target) => {
  const numbMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const complement = target - currentNumber;
    
    console.log(currentNumber, complement);
    
    if(numbMap.has(complement)){
        return [numbMap.get(complement), i];
    }
 numbMap.set(currentNumber, i);
 console.log(numbMap);
}
return undefined;
};

console.log(twoSum([2,11,7,15],9));