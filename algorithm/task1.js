const arr = [0, 1, 2]

for (const i=0; i<arr; i++){
    for (const j=i+1; i<arr; j++){
        if(arr[j] < arr[i]) {
            const timeVariable = arr[j];
            arr[j] = arr[i];
            arr[i] = timeVariable;
        }
    }
}
