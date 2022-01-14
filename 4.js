// let nama = ""

// const sapa= `Halo ${nama} !` 

// console.log(sapa)
//OBJECT
// const skill = ["HTML","CSS","JAVASCRIPT"]
// const kucing = {
//     nama : "Cocoy",
//     age : 3,
//     hobby : "Tidur",
//     skill
// }
// console.log(kucing.skill[0])

// //ARRAY

// console.log(skill[1])

// //MENGGABUNGKAN ARRAY
// const skill2 = ["PHP","REACT"]
// const skill = ["HTML","CSS","JAVASCRIPT"]
// const newskill = [...skill,"LARAVEL","CI"]
// const newskill2 = [...skill,...skill2]
// console.log(newskill)
// console.log(newskill2)


//DESTRUCT OBJECT
const kucing = {
    nama : "Cocoy",
    age : 3,
    hobby : "Tidur",
}
//namakucing = alias dari nama
const{nama : namakucing,age,hobby}=kucing
console.log(namakucing)

//DESTRUCT ARRAY
const rgb =  [255,254,253];
const [red,green,blue]=rgb;
console.log(red)