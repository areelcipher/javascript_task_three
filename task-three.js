const numberGame = (integer) => {
    // Declaration and initialization of my arrays
    const arrayOfNumbers = [];
    const arrayReplacement = [];

    // Populating the arrayOfNumber array
    for (let i = 1; i <= integer; i++) {
        arrayOfNumbers.push(i);
    }

    // Replacing the numbers divisible by 2, 3, 5 with the appropriate words
    for (let i = 0; i < arrayOfNumbers.length; i++) {

        // If the number is divisible by all the divisors, then the number should be replaced by "yu-gi-oh"
        if (arrayOfNumbers[i] % 2 === 0 && arrayOfNumbers[i] % 3 === 0 && arrayOfNumbers[i] % 5 === 0) {
            arrayReplacement.push('yu-gi-oh');
        } 

        // If the number is divisible by 2 and 3, the number should be replaced by "yu-gi"
        else if (arrayOfNumbers[i] % 2 == 0 && arrayOfNumbers[i] % 3 == 0) {
            arrayReplacement.push('yu-gi');
        }
        
        // If the number is divisible by 2 and 5, the number should be replaced by "yu-oh"
        else if (arrayOfNumbers[i] % 2 == 0 && arrayOfNumbers[i] % 5 == 0) {
            arrayReplacement.push('yu-oh');
        } 
        
        // If the number is divisible by 3 and 5, the number should be replaced by "gi-oh"
        else if (arrayOfNumbers[i] % 3 == 0 && arrayOfNumbers[i] % 5 == 0) {
            arrayReplacement.push('gi-oh');
        } 
        
        // If the number is divisible by 2, then the number should be replaced by "yu"
        else if (arrayOfNumbers[i] % 2 === 0) {
            arrayReplacement.push('yu')
        } 
        
        // If the number is divisible by 3, then the number should be replaced by "gi"
        else if (arrayOfNumbers[i] % 3 === 0) {
            arrayReplacement.push('gi');
        } 
        
        // If the number is divisible by 5, then the number should be replaced by "oh"
        else if (arrayOfNumbers[i] % 5 === 0) {
            arrayReplacement.push('oh');
        } 
        
        // If the number is not divisible by any of the above mentioned divisors, then the number shouldn't be replaced by any number
        else {
            arrayReplacement.push(i + 1);
        }
    }

    return arrayReplacement;
};

console.log(numberGame(100));

console.log('');

console.log('**********************');

console.log('');


console.log(numberGame(18));