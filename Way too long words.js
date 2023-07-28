"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
  const n = parseInt(readline());
   // console.log(n)
    for (let i = 0; i < n; i++) {
    const val = readline();
    let temp= val.trim().split("")
     // console.log(temp)
     let output;
      if(temp.length>10){
          output=temp[0]+(temp.length-2)+temp[temp.length-1];
         print(output)
      }else{
          print(val)
      }
  }
  

}