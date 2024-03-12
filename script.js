const max2 = (hodnota1, hodnota2) => {
    let vysledek = hodnota1
    if (hodnota1 <= hodnota2) {
        vysledek = hodnota2
    }
    return vysledek
}

const max3 = (hodnota1, hodnota2, hodnota3) => {
    // const vysledek = max2(max2(hodnota1, hodnota2),hodnota3)
    // let vysledek2 = max2(vysledek, hodnota3)
    // return vysledek2

    return max2(max2(hodnota1, hodnota2), hodnota3)
}

console.log(max2(4, 5))
console.log(max2(3, 4))

console.log(max3 (3, 4, 5))
console.log(max3 (0, 43, 56))
console.log(max3 (4, -3, 1))
console.log(max3 (101, 4, 56))
console.log(max3 (-10, -4, -293))