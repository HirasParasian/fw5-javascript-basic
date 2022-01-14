var MTK = 900
var BIndo = 90
var BInggris = 90
var IPA = 10
Rata2 = ""
Grade = ""

if (MTK == null && MTK == undefined  ){
    console.log("Masukkan Nilai MTK");
    }else if(BIndo == null && BIndo == undefined ){
        console.log("Masukkan Nilai BIndo")
        }else if (BInggris == null&& BInggris == undefined ) {
            console.log("Masukkan Nilai BInggris")
        }else if (IPA == null&& IPA == undefined ){
            console.log("Masukkan Nilai IPA")
        }else{
            Rata2 = (MTK + BIndo + BInggris + IPA)/4
            Grade = ""
            if (Rata2 >=90 && Rata2 <=100){
                Grade = "A"
            }else if (Rata2>=80 && Rata2 <90){
                Grade = "B"
            }else if (Rata2>=70 && Rata2 <80){
                Grade = "C"
            }else if (Rata2>=60 && Rata2 <70){
                Grade = "D"
            }else if (Rata2>=0 && Rata2 <60){
                Grade = "E"
            }else{
                Grade = " None "
            }
            console.log(`Rata -Rata = ${Rata2}`)
            console.log(`Grade = ${Grade}`)
        }



