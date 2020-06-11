function trueOrFalse(year) {
    
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
var results = true;
}
else {
    return false;
}
return results;
}

console.log("It is", trueOrFalse(1600));