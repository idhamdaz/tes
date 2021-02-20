function jumlah(...theArgs) {
  const sum = theArgs.reduce((acc, arg) => acc + arg, 0);
  return sum;
}
