function jumlah(...theArgs) {
  const sum = theArgs.reduce((acc, arg) => acc + arg, 0);
  return sum;
}
function mod(a,b){
 return a%b; 
}
  const gcd = (a, b) => a ? gcd(b % a, a) : b;
  const lcm = (a, b) => a * b / gcd(a, b);
function kpk(...args) {
  var keli = args.reduce(lcm);
  return keli
}
function fpb(...args){
  var fakt = args.reduce(gcd);
  return fakt;
}
