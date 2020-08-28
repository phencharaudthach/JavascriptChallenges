function designerPdfViewer(numbers, word) {

    var alphabet = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
    var alphabetArray = alphabet.split(",").toLowerCase();
    var numberArray = numbers.split(" ");
    // console.log(numberArray)
    
    for (var i = 0; i < alphabetArray.length; i++){
        for (var j = 0; j < numberArray[i].length; j++){
            console.log(alphabetArray[i],numberArray[i])
            if (alphabetArray[i]) {

            }
        }
    }
}
designerPdfViewer("1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5","abc");
    
