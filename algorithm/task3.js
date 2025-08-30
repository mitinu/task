function fibonacciMatrix(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const matrix = [[1, 1], [1, 0]];
    const poweredMatrix = matrixPower(matrix, n - 1);

    return poweredMatrix[0][0];
}

function matrixPower(matrix, power) {
    let result = [[1, 0], [0, 1]]; 

    while (power > 0) {
        if (power % 2 === 1) {
            result = multiplyMatrices(result, matrix);
        }
        matrix = multiplyMatrices(matrix, matrix);
        power = Math.floor(power / 2);
    }

    return result;
}

function multiplyMatrices(a, b) {
    return [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1]
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1]
        ]
    ];
}


console.log(fibonacciMatrix(0)); 
console.log(fibonacciMatrix(1)); 
console.log(fibonacciMatrix(2)); 
console.log(fibonacciMatrix(3)); 