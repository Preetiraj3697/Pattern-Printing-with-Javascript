
    //      1
    //     222
    //    33333
    //   4444444
    //  555555555
// Simple :=>
    // for (let i = 1; i < 6; i++) {
    //     let spaces = " ".repeat(5 - i);
    //     console.log(spaces + String(i).repeat(2 * i - 1));
    //   }

// let spaces, row;
// for (let i = 1; i <= 5; i++) {
//   spaces = "";
//   row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     spaces += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     row += i;
//   }
//   console.log(spaces + row);
// }

let n = 5;
let str = "";
let count = 0;
for(let i=n; i>=0; i--){
    //printing space
    for(let j=0;j<i; j++){
        str+=" ";
    }
    //printing star
    for(let k=0; k<2*(n-i)-1; k++){
        str+= count;
    }
    count++;
    str+="\n"
}
console.log(str);

