//Reverse a string of characters
// Hi my name is paul 
//luap si eman ym ih

let string = "Hi my name is paul"
function reverse1(str) {

    let reversed = ''
    for (let i = 0; i < string.length; i++) {
        reversed = string[i] + reversed
    }
    return reversed
}



function reverse2(str) {
    let returnedArray = []
    for (let i = str.length; i >= 0; i--) {
        returnedArray.push(str[i])
    }
    return returnedArray.join('')
}


// cleaner function using >ES6 syntax and array methods

const reverse3 = (str) => str.split('').reverse().join('')

const reverse4 = (str) => [...str].reverse().join('')

console.log(reverse4(string))

