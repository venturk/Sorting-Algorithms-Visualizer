export default function quickSortingSequence(arr) {
    const sequenceArr = []; // Init sequence array
    
    quickSort(arr, 0, arr.length - 1, sequenceArr);

    return sequenceArr;
}

function quickSort(arr, start, end, seqArr)
{
    if (start < end)
    {
        let pivot = partition(arr, start, end, seqArr);
        quickSort(arr, start, pivot - 1, seqArr);
        quickSort(arr, pivot + 1, end, seqArr);
    }
}

function partition(arr, start, end, sequenceArr)
{
    let i = start, pivot = arr[end], temp;

    /* For each element from start to end */
    for (let j = start; j < end; ++j)
    {
        /* Push index of the compared elements */
        sequenceArr.push([j, end]);

        /* If element is smaler than pivot */
        if (arr[j] < pivot)
        {
             /* Push index and value of swapped elements */
             sequenceArr.push([i, j, arr[j], arr[i]]);

            /* Swap */
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;

            ++i;
        }
    }

    /* Push index and value of swapped elements */
    sequenceArr.push([i, end, arr[end], arr[i]]);

    /* Swap between current element and end */
    temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    
    return i;
}
