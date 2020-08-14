function jumpingOnClouds(c){
let count = 0;
let jumps = 0;

for (let current = 0; current < c.length; current++){
   if ( c[current+2] === 0){
       jumps += 1;
       console.log(jumps)
   }
    }
// return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// avoids the 1 thunderheads
// can jump from the current index number of the cloud + 1 or 2