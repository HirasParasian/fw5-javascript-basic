let data = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874"
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    }
    
data.name = "Hiras Parasian"
data.username = "HirasPds"
data.email = "hirasparasian@gmail.com"
data.hobbies = "Membaca"
console.log(data)
let {address:{street},address:{suite},address:{city},address:{zipcode}}= data ;
console.log(street)
console.log(city)

