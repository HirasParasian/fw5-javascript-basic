printSegitiga = 10
if (typeof printSegitiga == "number" ){
    let hasil = '';
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            hasil = hasil + j + " ";
        }
        hasil += '\n';
    }
console.log(hasil);
} else {
    console.log("Harus Angka")
}



