/*
 * Complete the pageCount function below.
 */
function pageCount(totalNumberOfPages, PageNumber) {
    const fromFrontBook = Math.floor(PageNumber/2); // 2 
    const fromBackBook = Math.floor(totalNumberOfPages/2 - fromFrontBook) ; // 0
    return (Math.min(fromFrontBook, fromBackBook))
}

console.log(pageCount(5,4));
// expected output 0
