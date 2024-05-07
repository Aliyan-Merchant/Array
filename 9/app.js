let color = []

let firstcolor = prompt("Enter your 1st color")
color.unshift(firstcolor)
console.log(color)

let lastcolor = prompt("Enter your last color")
color.push(lastcolor)
console.log(color)

let biginningcolor1 = prompt("Enter 2 more color at beginning: color 1")
let biginningcolor2 = prompt("And color 2")
color.unshift(biginningcolor1)
color.unshift(biginningcolor2)
console.log(color)

color.shift(color[0])
console.log(color)

color.pop()
console.log(color)

let colornameadd = prompt("Enter 1 more color name")
let coloraddposition = +prompt("Enter color position")
color.splice(coloraddposition, 0, colornameadd);
console.log(color)

let colornamedelete = prompt("Enter 1/more color name")
let colordeleteposition = +prompt("Enter color position (Delete)")
let colorpositionadd = +prompt("Enter color position (Add)")
color.splice(colorpositionadd, colordeleteposition, colornamedelete);
console.log(color)

