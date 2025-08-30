function mergesort(arr){
   
    if (!arr.length>1) {
        return arr
    }
    const midel = arr.length/2
    const subarr1 = mergesort(arr.slice(0, midel))
    const subarr2 = mergesort(arr.slice(midel, arr.length))
    const finalArr = []
    for (let i = 0; i < subarr1.length; i++) {
        for (let j = 0; j < subarr2.length; j++) {
            if (i>j) {
                finalArr.push(subarr1[i++])
            }
            if (i<J) {
                finalArr.push(subarr2[j++])
            }
            if(i==j){
                finalArr.push(subarr1[i++])
                finalArr.push(subarr2[j++])
            }
        }        
    }
    return finalArr
} 