var dragon_ballz = ["Goku", "vegetta", 'picoro'];
console.log('Personaje', dragon_ballz[0]);
//now for deconstructed arrays make a constant then indicate absolute
//position
var p1 = dragon_ballz[0], p2 = dragon_ballz[1], p3 = dragon_ballz[2];
//can you to observe will print the personage in position 2 (p2)
console.log('personaje', p2);
var telefono = {
    desc: 'Nokia',
    precio: 1250
};
var tablet = {
    desc: 'iPad m1',
    precio: 1099
};
function calculo_IVA(productos) {
    var total = 0;
    productos.forEach(function (p) {
        //alternativamente se puede usar forEach(({precio}...
        total += p.precio;
    });
    return total * 0.15;
}
// a la constante articulos se le pasa un arreglo con los
//objetos creados con la interface Producto
var articulos = [telefono, tablet];
//en la variable isv se almacena el resultado o retorno de la
//funcion calculo_iva a la que le pasamos el arreglo articulos
var isv = calculo_IVA(articulos);
console.log('el impuesto es', isv);
//# sourceMappingURL=class_19_destructured.js.map