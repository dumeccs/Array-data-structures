// Implementing an array Data structure using objects

class MyArray  {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    
    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        // this.length--
        return lastItem
    }
    delete(index){
        // to do this we gatto remove an item from
        delete this.data[index]

        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
            // access the key here and assign it to the value of the next key
        }
        delete this.data[this.length-1]
    }
    unshift(item){
        
        for(let i = this.length; i > 0 ; i--){
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = item
        this.length++
        return this.data
    }
    insert(item , index) {
        for(let i = this.length + 1; i > index; i--){
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = item
        this.length++
        return this.data
    }

    slice(startIndex, endIndex){
        let returnedString = ''
        if(endIndex){
            for(let i = startIndex; i < endIndex; i++){
                if(i === endIndex - 1){
                    returnedString += this.data[i] 
                }
                else{
                    returnedString += this.data[i] + ', '
                }
                
            }
        }

        else{
            for(let i = startIndex; i < this.length; i++){
                if(i === this.length - 1
                      ){
                    returnedString += this.data[i] 
                }
                else{
                    returnedString += this.data[i] + ', '
                }
                
            }
        }
        
        return returnedString
    }


}


const newArray = new MyArray()


console.log(newArray.push('orange'))
console.log(newArray.push('mango'))
console.log(newArray.push('Pawpaw'))
console.log(newArray.push('Guava'))
console.log(newArray.push('Sour-sop'))
console.log(newArray.unshift('I am the one'))
console.log(newArray.insert('2 here is not second 😭',5))
console.log(newArray.slice(2))
console.log(newArray.length)
// console.log(newArray)
