function getLetter(s) {
  var setA = ['a,e,i,o,u'];
  var setB = ['b,c,d,f,g'];
  var setC = ['h,j,k,l,m'];
  var setD = ['n,p,q,r,s,t,v,w,x,y,z'];

  var letter = s.slice(0, 1);

  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      return 'B';
      break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      return 'C';
      break;
    default:
      return 'D';
  }
}

console.log(getLetter('dfgt'));
