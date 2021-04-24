// arrow function
const suma = (a, b) => a + b;
let total = suma(4,5);
console.log(total)

interface SuperHero {
    name: string;
    age: number;
    direction: Direction
    showDirection:() => string;
}

// nested objects in interfaces
interface Direction{
        street: string,
        country: string,
        city: string,
}

const personaje:SuperHero = {
    name: 'Alex',
    age: 40,
    direction: {
        street: 'calle',
        country: 'Colombia',
        city: 'Bogota'
    },
    showDirection(){
        return this.name + ', ' + this.direction.city + ', ' + this.direction.country;
    }
}

let direccion = personaje.showDirection();
console.log(direccion)