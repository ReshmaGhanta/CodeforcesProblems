function processData(input) {
    let t=parseInt(input.split('\n').shift())
    let ar=input.split('\n').map(Number)
    for(let i=1;i<=t;i++){
        console.log(Math.floor(ar[i]/2)+1)
      
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
