function generatePassword(length){
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    let password = ""
    const arrayLength = characters.length
    for(let i =0;i<length;i++){
       let randomIndex =Math.floor(Math.random()*(arrayLength)+0)
       password+=characters[randomIndex]
    }
    return password
}
let password=generatePassword(10)
console.log(`Generated password: ${password}`)