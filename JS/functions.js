function sequence(x) {
  let a = []
  let i = 0
  while (x > 0) {
    x = x - 1;
    i++;
    a.push(i)
  }
  return a.sort()
}

const num = 8
console.log(sequence(8))




//console.log(b)

// timmy
// dogs
// big
// bigger

// &lt;      (<)

let importantSi = [
  {
    book: "read the book",
    network: "Social Net on JS",
    homework: "Another Ignat's homework",
    layout: "One lesson with Prokopchuck",
  }
]

let importantMi = [
  {
    counter: "are counter is ready?",
    brouser: "claer one tab",
    react: "kabzda like easy",
    native: "lesson native",
    MIU: "walking on miu",
  }
]

let importantJu = [
  {
    codewars: "Solve task on CodeWars",
    instagramm: "Check some saves",
  }
]
let testArr = [
  'importantSi', 'importantMi', 'importantJu'
]
//let randomWithSi = Math.random(testArr.length.Math.random()
let a = testArr.length
let b = Math.round(Math.random() * 3)
let c = Math.round(Math.random() * 4)
let d = Math.round(Math.random())

let arrayOfValuesFromImoptanSi = Object.values(importantSi[0]) //array
let randomOfImportantSi = arrayOfValuesFromImoptanSi[b]
let arrayOfValuesFromImportantMi = Object.values(importantMi[0])
let randomOfImportantMi = arrayOfValuesFromImportantMi[c]
let arrayOfValuesFromImportantJu = Object.values(importantJu[0])
let randomOfImportantJu = arrayOfValuesFromImportantJu[d]


//let x = Object.values(importantSi[0])[b]


function testFunction() {

  console.log(randomOfImportantJu + "  /  " + randomOfImportantMi + "  /  " + randomOfImportantSi)


  //return testArr[b]
}

testFunction();
