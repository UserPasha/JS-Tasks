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

function dateTest(y,m,d){
const a = new Date(y, m-1, d)
const b = new Date()
let days = `your are ${Math.floor((b.getTime()-a.getTime())/ (1000*60*60*24))} days`
let hours = `your are ${Math.floor((b.getTime()-a.getTime())/ (1000*60*60))} hours`
let minutes = `your are ${Math.floor((b.getTime()-a.getTime())/ (1000*60))} minutes`
return minutes
}

console.log(dateTest(1981, 4, 8))


//console.log(b)



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
    withReact: "work with project. add nav or structure or css",
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
    css: "play a css game",
  }
]
let testArr = [
  'importantSi', 'importantMi', 'importantJu'
]
//let randomWithSi = Math.random(testArr.length.Math.random()
let a = testArr.length
let b = Math.round(Math.random() * 3)
let c = Math.round(Math.random() * 4)
let d = Math.round(Math.random()* 2)

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
