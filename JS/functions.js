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

function dateTest(y, m, d) {
  const a = new Date(y, m - 1, d)
  const b = new Date()
  let days = `your are ${Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))} days`
  let hours = `your are ${Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60))} hours`
  let minutes = `your are ${Math.floor((b.getTime() - a.getTime()) / (1000 * 60))} minutes`
  return minutes
}

console.log(dateTest(1981, 4, 8))


//console.log(b)



// &lt;      (<)

let importantSi = [

  "read the book",
  "Social Net on JS",
  "Another Ignat's homework",
  "One lesson with Prokopchuck",

]

let importantMi = [

  "work with project. add nav or structure or css",
  "claer one tab",
  "kabzda like easy",
  "lesson native",
  "walking on miu",
  "deepCopy with tests"
]

let importantJu = [

  "Solve task on CodeWars",
  "Check some saves",
  "play a css game",

]
let testArr = [
  'importantSi', 'importantMi', 'importantJu'
]

let randomOfImportantSi = importantSi[Math.floor(Math.random() * importantSi.length)]
let randomOfImportantMi = importantMi[Math.floor(Math.random() * importantMi.length)]
let randomOfImportantJu = importantJu[Math.floor(Math.random() * importantJu.length)]



console.log(randomOfImportantJu + "  /  " + randomOfImportantMi + "  /  " + randomOfImportantSi)

let a = 1
let b = 2
let c = a + b++
let d = a + ++b
console.log(c) // 3 (1+2)
console.log(d) // 5 (1+4(1+3))

"01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"

function stat(st) {
  if (st === "") {
    return ""
  }
  let a = st.split(",")
  let b = a.map(m => m.split("|"))
  let c = b.map(b => (+b[0] * 3600) + (+b[1] * 60) + (+b[2]))
  let d = c.sort((a, b) => a - b)
  let e = Math.floor((d[d.length - 1] - d[0]) / 3600)
  e < 10 ? e = "0" + e + "" : e;
  let f = Math.floor(((d[d.length - 1] - d[0]) % 3600) / 60)
  f < 10 ? f = "0" + f + "" : f;
  let g = ((d[d.length - 1] - d[0]) % 3600) % 60
  g < 10 ? g = "0" + g + "" : g;
  let range = "" + e + "|" + f + "|" + g + ""
  let h = d.reduce((a, b) => a + b) / d.length
  let i = Math.floor(h / 3600)
  i < 10 ? i = "0" + i + "" : i;
  let l = Math.floor(h % 3600 / 60)
  l < 10 ? l = "0" + l + "" : l;
  let k = Math.floor(h % 3600 % 60)
  k < 10 ? k = "0" + k + "" : k;
  let Average = "" + i + "|" + l + "|" + k + ""
  let m
  if (d.length % 2 > 0) {
    m = d[(d.length - 1) / 2]
  } else {
    m = (d[d.length / 2] + d[Math.floor((d.length - 1) / 2)]) / 2
  }
  let n = Math.floor(m / 3600)
  let y = m - n * 3600
  n < 10 ? n = "0" + n + "" : n;
  let x = Math.floor(y / 60)
  x < 10 ? x = "0" + x + "" : x;
  y < 10 ? y = "0" + y + "" : y;
  let z = Math.floor(y - x * 60)
  z < 10 ? z = "0" + z + "" : z;
  let median = "" + n + "|" + x + "|" + z + ""
  return "Range: " + range + " Average: " + Average + " Median: " + median + ""
}
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))

1 | 1 | 18
1 | 38 | 4
1 | 38 | 4

const digits = ["one", "two", "three", "four", "five"]
let xu = digits.slice(-5)
console.log(xu)

let ob = { a: 5 }
function retA() {
  return this.a
}
let bb = retA.bind(ob)
let cc = retA.call(ob)
let dd = retA.apply(ob)
console.log(bb())
console.log(retA())
console.log(retA.call(ob))
console.log(retA.apply(ob))
console.log(cc)
console.log(dd)

function ReturnTitle(items, value) {
  let x = items.filter(f => value === f.value ? f.title : { f })
  return x
}
let arr = [{ title: "City", value: 1 }, { title: "United", value: 2 }, { title: "London", value: 3 }]
console.log(ReturnTitle(arr, 1))

function mm(array) {
  let a = []
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(Math.sqrt(array[i])) === Math.sqrt(array[i])) {
      a.push(Math.sqrt(array[i]))
    } else {
      a.push(Math.pow(array[i], 2))
    }
  }
  return a
}
console.log(mm([2, 3, 9, 14, 25]))