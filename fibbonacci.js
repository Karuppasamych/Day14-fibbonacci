let fibo = prompt('Enter the number');

let pre = 0;
let cur = 1;
let total = 0;

function fibbo(num){

    for (let i = 2; i< num; i++){

        total = pre + cur;

        pre = cur;
        cur = total

        console.log(cur);
    }

}

var refibbo = fibbo(fibo);