function removeDuplicates(nums) {
    const uniqueNums = [];

    for (let num of nums) {
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    }

    return uniqueNums;
}


const numbers = [1, 2, 3, 4, 5, 2, 6, 7, 3,3,2,1,5,3,12,4,1,2,54,3,2,2,2];
const cleanedArray = removeDuplicates(numbers);
console.log("Cleaned array:", cleanedArray); 
