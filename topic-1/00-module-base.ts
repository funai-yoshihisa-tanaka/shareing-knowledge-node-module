let count = 0;

export function add(){
  count++;
  return count;
}

setTimeout(() => {
  console.log("Base Module", count, "// import時にコードが何度も走るのであれば、この部分は何度も表示されるはず。");
}, 1000);