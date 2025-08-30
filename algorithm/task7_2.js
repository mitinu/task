function RadixSort(arr){
    let numberDigits = 0
    for (let i = 0; i < arr.length; i++) {
        if(numberDigits < arr[i].toString().split().length){
            numberDigits = arr[i].toString().split().length
        }
    }
     
    let auxiliaryArr = new Array(10).fill([])
    for (let i = 0; i < numberDigits; i++) {
        for (let j = 0; j < arr.length; j++) {
            number = arr[i].toString().split()
            for (let ind = number.length; ind < numberDigits; ind++) {
                number.unshift(0)
            }
            auxiliaryArr[number[auxiliaryArr]].push(arr[i])
        }
        arr = auxiliaryArr
        auxiliaryArr = new Array(10).fill([])
    }
    return arr
}