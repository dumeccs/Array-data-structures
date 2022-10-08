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
        return this.data
    }
    insert(item , index) {
        for(let i = this.length + 1; i > index; i--){
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = item
        return this.data
    }

}


const newArray = new MyArray()


console.log(newArray.push('orange'))
console.log(newArray.push('mango'))
console.log(newArray.push('Pawpaw'))
console.log(newArray.push('Guava'))
console.log(newArray.push('Sour sop'))
console.log(newArray.unshift('I am the one'))
console.log(newArray.insert('2 here is not second 😭',2))
console.log(newArray)
