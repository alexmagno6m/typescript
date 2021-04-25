//map function
let new_a: number[] = [2,3,4]

function mult(a){
    let total:number = a * 2;
    return total;
}
let list_2 = new_a.map(mult)
console.log(list_2)
//map arrow function
let list_3 = new_a.map(x => x*2)
console.log(list_3)

//filter function
function mayors(a){
    return a > 3;
}
let list_4 = new_a.filter(mayors);
console.log(list_4);
let list_5 = new_a.filter(x => x > 3);
console.log(list_5)