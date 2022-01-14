const MTK = 80 
const BIndo = 90
const BInggris = 90
const IPA = 65

if (MTK == null ){
    console.log("Nilai Harus Diisi")
    return false;
};
if (BIndo == null){
    console.log("Nilai Harus Diisi")
    return false;
};
if (BInggris == null){
    console.log("Nilai Harus Diisi")
    return false;
};
if (IPA == null){
    console.log("Nilai Harus Diisi")
    return false;
};

Rata2 = (MTK + BIndo + BInggris + IPA)/4

console.log("Rata Rata = " + Rata2)

if (Rata2>=90 && Rata2 <=100){
    console.log("Grade = A")
}else if (Rata2>=80){
    console.log("Grade = B")
}else if (Rata2>=70){
    console.log("Grade = C")
}else if (Rata2>=60){
    console.log("Grade = D")
}else {
    console.log("Grade = F")
}