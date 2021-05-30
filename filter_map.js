//map function
var new_a = [2, 3, 4];
function mult(a) {
    var total = a * 2;
    return total;
}
var list_2 = new_a.map(mult);
console.log(list_2);
//map arrow function
var list_3 = new_a.map(function (x) { return x * 2; });
console.log(list_3);
//filter function
function mayors(a) {
    return a > 3;
}
var list_4 = new_a.filter(mayors);
console.log(list_4);
var list_5 = new_a.filter(function (x) { return x > 3; });
console.log(list_5);
var my_str = 'k ase';
var user = ['alex', 'bibiana', 'carlos'];
var complet_users = user.map(function (x) { return x + '@gmail.com'; });
function email(x) {
    return x + '@gmail.com';
}
var complet_users2 = user.map(email);
console.log(complet_users);
console.log(complet_users2);
//reduce function with arrow flat
var sum = new_a.reduce(function (x, y) { return x + y; });
console.log(sum);
//reduce function with traditional statement
function sum2(x, y) {
    return x + y;
}
var sum3 = new_a.reduce(sum2);
console.log(sum3);
//# sourceMappingURL=filter_map.js.map