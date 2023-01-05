// *         *
// * *     * *
// * * * * * *
// * *     * *
// *         *


let n = 3;let str = "";
for(let i=0; i<n; i++){
    for(j = 0; j < (2 * n); j++)
        {
            if(i >= j) // upper left triangle
               str+="*";
            else
            str+=" ";
            if(i >= (2 * n - 1) - j)  // upper right triangle
               str+="*";
            else
            str+=" ";
        }
        str+="\n";;
}
for(i = 0; i < n; i++)
    {
        for(j = 0; j < (2 * n); j++)
        {
            if(i + j <= n - 1)  // bottom left triangle
                str+="*"
            else
            str+=" "
            if((i + n) <= j)  // bottom right triangle
            str+="*"
            else
            str+=" "
        }
        str+="\n";
    }
console.log(str);
