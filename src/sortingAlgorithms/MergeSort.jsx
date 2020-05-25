export default function mergeSortingSequence(arr) {
    const seqArr = []; // Init sequence array
    const auxArr = arr.slice(); // Auxiliary array

    mergeSortHelper(arr, 0, arr.length - 1, auxArr, seqArr);

    return seqArr;
}

function mergeSortHelper(arr, startIdx, endIdx, auxArr, seqArr) {
    if (startIdx === endIdx) {
        return;
    }

    const midIdx = Math.floor((startIdx + endIdx) / 2); // Middle index

    mergeSortHelper(auxArr, startIdx, midIdx, arr, seqArr); // First half
    mergeSortHelper(auxArr, midIdx + 1, endIdx, arr, seqArr); // Second half

    merging(arr, startIdx, midIdx, endIdx, auxArr, seqArr);  // Actual merging
}

function merging(arr, startIdx, midIdx, endIdx, auxArr, seqArr) {
    let leftIdx = startIdx; // Left sub array index
    let rightIdx = midIdx + 1; // Right sub array index
    let auxIdx = startIdx; // auxiliary index

    while (leftIdx <= midIdx && rightIdx <= endIdx) {
        // Push index of the compared elements
        seqArr.push([leftIdx, rightIdx]);

        // Merge
        if (auxArr[leftIdx] <= auxArr[rightIdx]) {
            seqArr.push([auxIdx, auxArr[leftIdx], true]);
            arr[auxIdx++] = auxArr[leftIdx++];
        } else {
            seqArr.push([auxIdx, auxArr[rightIdx], true]);
            arr[auxIdx++] = auxArr[rightIdx++];
        }
    }

    while (leftIdx <= midIdx) { // Remaining elements of left sub array
        seqArr.push([leftIdx, leftIdx]);
        seqArr.push([auxIdx, auxArr[leftIdx], true]);

        arr[auxIdx++] = auxArr[leftIdx++];
    }
    
    while (rightIdx <= endIdx) { // Remaining elements of right sub array
        seqArr.push([rightIdx, rightIdx]);
        seqArr.push([auxIdx, auxArr[rightIdx], true]);

        arr[auxIdx++] = auxArr[rightIdx++];
    }

    return;
}