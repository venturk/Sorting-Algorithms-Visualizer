export default function selectionSortingSequence(arr) {
    const sequenceArr = []; // Init sequence array
    let current_min_idx;
    
    for (let i = 0; i < arr.length; ++i)
    {
        /* set minimum index to current index */
        current_min_idx = i;

        for (let j = i + 1; j < arr.length; ++j)
        {
            /* Push index of the compared elements */
            sequenceArr.push([current_min_idx, j]);

            /* If current minimum is bigger than the current element */
            if (arr[current_min_idx] > arr[j])
            {
                /* Push index and value of swapped elements */
                sequenceArr.push([current_min_idx, j, arr[j], arr[current_min_idx]]);
                
                /* Swap */
                let temp = arr[current_min_idx];
                arr[current_min_idx] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return sequenceArr;
}