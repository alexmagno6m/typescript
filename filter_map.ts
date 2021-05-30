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
let my_str: string = 'k ase';
let user: string[] = ['alex', 'bibiana', 'carlos'];
let complet_users = user.map(x => x + '@gmail.com');
function email(x){
    return x + '@gmail.com'
}
let complet_users2 = user.map(email);
console.log(complet_users);
console.log(complet_users2);

//reduce function with arrow flat
let sum = new_a.reduce((x, y) => x + y);
console.log(sum);
//reduce function with traditional statement
function sum2(x,y){
    return x + y;
}
let sum3 = new_a.reduce(sum2);
console.log(sum3);