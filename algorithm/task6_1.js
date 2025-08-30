function quicksort(arr){
    const lastIndex = arr.length-1
    const splitNumber = arr[lastIndex]
    for (let i, j = 0; i < arr.length; i++) {
        if (arr[i]<=arr[lastIndex]) {
            j++
            if(arr[i]<arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }        
    }
    const firstIndexSplit = arr.indexOf(splitNumber)
    const lastIndexSplit = arr.lastIndexOf(splitNumber)
    const part1 = arr.slice(0, firstIndexSplit);
    const part2 = arr.slice(firstIndexSplit, lastIndexSplit); 
    const part3 = arr.slice(lastIndexSplit, lastIndex);    
    return [...quicksort(part1), ...part2, ...quicksort(part3)];
}