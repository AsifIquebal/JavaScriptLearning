numbers = ['One', 'Two','Three','Four','Five','Six']
numbers[0] = '1'
console.log(numbers)
// number shift
numbers.shift()
console.log("After Shift: " + numbers)
console.log(numbers.shift())
console.log("After Shift: " + numbers)
numbers.unshift('hello')
console.log("After unshift: " + numbers)

numbers = ['One', 'Two','Three','Four','Five','Six']
console.log(numbers)
numbers.pop()
console.log("After Pop: " + numbers)