//         *    
//        ***   
//       *****  
//      ******* 
//     *********

let n = 5;
let str = "";
for(let i=n; i>=0; i--){
    //printing space
    for(let j=0;j<i; j++){
        str+=" ";
    }
    //printing star
    for(let k=0; k<2*(n-i)-1; k++){
        str+= "*";
    }
    str+="\n"
}
console.log(str);