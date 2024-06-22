// const myArray = ["1",1,2,true,1.1]


// console.log(myArray)
// myArray.pop()
// myArray.push("Hello")

// console.log(myArray.length);
// console.log(myArray.reverse())
// console.log(myArray)

// const dataArray = [1,2,3]
// const copyArray = dataArray
// copyArray[1] = 5

// console.log(dataArray)
// console.log(copyArray)

// const dataArray = [1,2,3]
// const copyArray = [...dataArray]
// copyArray[1] = 5

// console.log(dataArray)
// console.log(copyArray)

const dataArray = [1,2,3,[4,5,6]]
const copyArray = [...dataArray] // shallow copy
copyArray[3][0] = 5

console.log(dataArray)
console.log(copyArray)