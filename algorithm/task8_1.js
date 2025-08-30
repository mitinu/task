function Select(arr){
    for (let i = 0; i < arr.length; i++) {
        let IndMinNumber = 0
        for (let j = 0+i; j < arr.length; j++) {
            if (arr[IndMinNumber]>arr[j]) {
                IndMinNumber = j
            }
        }
        [arr[IndMinNumber], arr[i]] = [arr[i], arr[IndMinNumber]];
    }
    return arr
}