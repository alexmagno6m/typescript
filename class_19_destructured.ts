const dragon_ballz: string[] = ["Goku", "vegetta", 'picoro']
console.log('Personaje', dragon_ballz[0]);
//now for deconstructed arrays make a constant then indicate absolute
//position
const [p1,p2,p3] = dragon_ballz;
//can you to observe will print the personage in position 2 (p2)
console.log('personaje', p2);
// desestructuracion de argumentos
interface Producto{
    desc:string;
    precio:number;
}
const telefono: Producto={
    desc: 'Nokia',
    precio: 1250
}
const tablet: Producto = {
    desc: 'iPad m1',
    precio: 1099
}

function calculo_IVA(productos:Producto[]){
    let total = 0;
    productos.forEach((p) => {
        //alternativamente se puede usar forEach(({precio}...
        total += p.precio;
    })
    return total * 0.15;
}
// a la constante articulos se le pasa un arreglo con los
//objetos creados con la interface Producto
const articulos = [telefono, tablet];
//en la variable isv se almacena el resultado o retorno de la
//funcion calculo_iva a la que le pasamos el arreglo articulos
const isv = calculo_IVA(articulos);
console.log('el impuesto es', isv);


