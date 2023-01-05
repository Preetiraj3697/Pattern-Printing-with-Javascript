    //     *
    //    ***
    //   *****    *
    //  *******  **
    // ************
    //  *******  **
    //   *****    *
    //    ***
    //     *


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
    for(let i=1; i<n; i++){
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


    for(let i=0; i<n; i++){
        for(let j=0; j<i; j++){
            str+=("*")+" "
        }
        str+="\n";
    }
    for(let i=1;i<=n;i++){
        for(let j=n;j>=1;j--){
            if(i>=j){
                str+=("*")+" "
            }else{
                str+=" ";
            }
           
        }
        str+="\n";
    }
    console.log(str);