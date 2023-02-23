const palindrome = (string)=>{
    return string
        .split('') // convierte al string en un array
        .reverse() // lo voltea
        .join('')  // lo vuelve string otra vez
}

const average = array =>{
    let sum = 0
    array.foreach(num=> {sum+=num})
}

module.exports = {
    palindrome,
    average,
}