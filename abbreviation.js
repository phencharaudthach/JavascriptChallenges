function abbreviation(a, b) {
var stringA = a.split("");
var stringB = b.split("");
var i = 0;
var matchString = [];
while (i < stringA.length){
    // console.log(matchString.push(stringA[stringA.indexOf(stringB[i])]))
    if (stringA.indexOf(stringB[i]) !== -1){
        matchString.push(stringA[stringA.indexOf(stringB[i])])
    }
    i++
}

console.log(matchString.toString());
console.log(stringB.toString())
if (matchString.toString() === stringB.toString()) return "YES"
return "NO"
}

console.log(abbreviation("daBcd","ABC"));

// Make wordA match wordB
// Can only remove letters 
// Make the matching letters Uppercase?