let student1name = prompt("Enter Student 1 name")
let student1score = +prompt("Enter Student 1 score out of 500")

let student2name = prompt("Enter Student 2 name")
let student2score = +prompt("Enter Student 2 score out of 500")

let student3name = prompt("Enter Student 3 name")
let student3score = +prompt("Enter Student 3 score out of 500")

let name = [student1name, student2name, student3name]
let score = [student1score, student2score, student3score]

let student1percentage = (student1score * 100) / 500
let student2percentage = (student2score * 100) / 500
let student3percentage = (student3score * 100) / 500

let persentage = [student1percentage, student2percentage, student3percentage]

document.write(`Score of ${student1name} is ${student1score}. Persentage: ${student1percentage}%.<br>
Score of ${student2name} is ${student2score}. Persentage: ${student2percentage}%.<br>
Score of ${student3name} is ${student3score}. Persentage: ${student3percentage}%.<br>`)



