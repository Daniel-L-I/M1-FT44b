// Todo: Retornar el numero mas grande

// const arr = [5, 9, 7, 2, 4]

// let max = arr[0] // * paso 1

// for (let i = 1; i < arr.length; i++) { //? N paso
//     if (arr[i] > max) max = arr[i];  
// } 

// console.log(max);


/*
    ? 1 + n * 2-> 1 + 2n -> 3n -> O(3n) -> O(n)

*O(n) conplejidad temporaarolgartmica de nuestro ejercicio es lineal
*/
// * De dos pares de numeros logren dar el resultado de uno de los elementos del array, retornar los numero involucrados

// const arr = [5, 9, 7, 2, 4]


// function sumarArray(arr, valor) {
//     for (let i = 0; i < arr.length; i++) { // n pasos
//         for (let j = i + 1; j < arr.length; j++) {// n paso
//             if (valor === arr[i] + arr[j]) return [arr[i], arr[j]] // 2 pasos
//         }
//     }
//     return 'Ningun elemento suma ese valor ' + valor //3 paso
// }

// console.log(sumarArray(arr, 5));

/*
? N * N + 2 + 1-> NC2 + 2 + 1 -> 3NC2 -> O(NC2) =>25 PASO EN TOTAL
*/
// ? MEJORA COMPLIJIDAD

const arr = [5, 9, 7, 2, 4]

function sumarArray(arr, valor) {
    const numeroVistos = {}// 1 pasos
    let inicio = 0// 1 pasos
    let fin = arr.length - 1// 1 pasos
    while (inicio < fin) {// n pasos
        const auxi = valor - arr[inicio] // 1 pasos
        if (numeroVistos[auxi]) return [auxi, arr[inicio]]// 2 pasos
        numeroVistos[arr[inicio]] = true// 1 pasos
        inicio++//!
    }
    return 'Ningun elemento suma ese valor ' + valor // 1 pasos
}

/*
    ? 3 + N * 5 + 1 -> 5N + 1 -> 9N -> O(N)
    ? complejidad temporal logartmica lineal
 */