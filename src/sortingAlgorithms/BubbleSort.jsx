export default function bubbleSortingSequence(arr) {
    const sequenceArr = []; // Init sequence array

    for (let j = 0; j < arr.length - 1; ++j) {
        let swapped = false;

        for (let i = 0; i < arr.length - 1 - j; ++i) {
            sequenceArr.push([i, i + 1]); // Push index of the compared elements

            if (arr[i] > arr[i + 1]) { // If current element is smaller than the next element
                sequenceArr.push([i, i + 1, arr[i + 1], arr[i]]); // Push index and value of swapped elements
                
                let temp = arr[i]; // Swap
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }

        if(swapped === false) { // Array is sorted
            break;
        }
    }

    return sequenceArr;
}