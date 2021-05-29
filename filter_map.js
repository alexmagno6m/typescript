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
//# sourceMappingURL=filter_map.js.map