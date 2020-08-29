function abbreviation(a, b) {
    a = a.toUpperCase();
    let arrayA = a.split("");
    let arrayB = b.split("");
    for (var i = 0; i < arrayA.length; i++){
        if (arrayA.length < arrayB.length){
            return "NO";
        }
        if (arrayB[i] != arrayA[i]){
            arrayA.splice(i, 1);
            i++;
        }
    }
    if (arrayA.toString() == arrayB.toString()){
        return "Yes";
    }
    return "No"
}

console.log(abbreviation("ELEDhEOXIAZQYWOPQIUSSGDCXOHSeYCKSCOYEMEDTGWPlJRZFILHZOBAVMFXdnxn",
"ELEDEOXIAZQYWOPQIUSSGDCXOHSYCKSCOYEMEDTGWPJRZFILHZOBAVMFX"))

// Make wordA match wordB
// Can only remove letters 
// Make the matching letters Uppercase?