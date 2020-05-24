export default function heapSortingSequence(arr) {
    const seqArr = []; // Init sequence array
    let size = arr.length;

    // Build heap from array 
    for (let i = Math.floor(size / 2) - 1; i >= 0; --i) {
        heapify(arr, seqArr, size, i);
    }

    // One by one extract an element from heap
    for (let i = size - 1; i > 0; --i) {
        // Push index of the compared elements
        seqArr.push([0, i, arr[i], arr[0]]);

        // Swaping
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify on reduced heap 
        heapify(arr, seqArr, i, 0);
    }

    return seqArr;
}

function heapify(arr, seqArr, size, idx) {
    let largest = idx; // Initialize largest element as root
    let left = 2 * idx + 1; // Left child node
    let right = 2 * idx + 2; // Right child node

    if (left < size) {
        // Push index of the compared elements
        seqArr.push([left, largest]);

        // Update root
        if (arr[left] > arr[largest]) {
            largest = left;
        }
    }

    if (right < size) {
        // Push index of the compared elements
        seqArr.push([right, largest]);

        // Update root
        if (arr[right] > arr[largest]) {
            largest = right;
        }
    }

    // If root isn't the largest element
    if (largest !== idx) {
        // Push index and value of swapped elements
        seqArr.push([idx, largest, arr[largest], arr[idx]]);

        // Swaping
        let temp = arr[idx];
        arr[idx] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree 
        heapify(arr, seqArr, size, largest);
    }
}