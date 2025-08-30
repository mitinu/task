function CountingSort(arr){
    let maxNumber = 0
    for (let i = 0; i < arr.length; i++) {
        if(maxNumber<arr[i]){
            maxNumber = arr[i]
        }
    }
    const countingArr = new Array(maxNumber).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        countingArr[arr[i]]++
    }
    const finallyArr = []
    for (let i = 0; i < countingArr.length; i++) {
        for (let j = 0; j < countingArr[i]; j++) {
            finallyArr.push(i)
        }        
    }
    return finallyArr
}