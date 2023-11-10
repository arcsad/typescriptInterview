export function merge(collection_1: number[], collection_2: number[]): number[] {
    if (isSorted(collection_1) && isSorted(collection_2)) {
        // Arrays are sorted, proceed with the normal merge
        let merged: number[] = [];
        let i = 0, j = 0;

        while (i < collection_1.length && j < collection_2.length) {
            if (collection_1[i] <= collection_2[j]) {
                merged.push(collection_1[i]);
                i++;
            } else {
                merged.push(collection_2[j]);
                j++;
            }
        }

        while (i < collection_1.length) {
            merged.push(collection_1[i]);
            i++;
        }

        while (j < collection_2.length) {
            merged.push(collection_2[j]);
            j++;
        }

        return merged;
    } else {
        // Arrays are not sorted, return them as they are
        return [...collection_1, ...collection_2];
    }
}

function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}




