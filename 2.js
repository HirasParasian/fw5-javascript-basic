//IF ELSE

let x=5
x=10
if(x<10){
    //block 1
    console.log("Block 1")
}else if(x=10){
    console.log("Block Else If")
}
else{
    //block 2
    console.log("Block 2")
}

// SWITCH CASE

x = 15
switch(x){
    case 10:{
        console.log("100")
        break
    }
    case 11:{
        console.log("101")
        break
    }
    default:{//jika x bukan dari kondisi
        console.log("Not Either")
    }
}

//TERNARY OPERATOR

const y = 10 > 0 ?"Sepuluh" : "Bukan Sepuluh"
console.log(y)

// 0 dan "" dianggap sebagai False dan akan dipilih "Kosong"
//OR
const z = 0 || "" || "Kosong"
console.log(z)

//0 && 1 dianggap FALSE
//&&
const a = 0 && 1 || "Text" 
console.log(typeof a)

//50&&"50" akan dipilih yang kanan
const c = 50 && "50" || "Text" 
console.log(typeof c)

const b = 0 !== "0" ?"TRUE" : "FALSE"
console.log(b)