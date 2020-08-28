function designerPdfViewer(h, word) {
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letterHeight = [];

for (let i =0; i < word.length; i++){
    letterHeight.push(h[alphabet.indexOf(word[i])])
}

let tallest = Math.max(...letterHeight)
console.log(tallest)

return tallest * word.length
}

console.log(designerPdfViewer('13131413255555555555555557', 'zaba'));