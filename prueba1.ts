let skills: string[] = ['bash', 'counter', 'healing'];
//define interface
interface Character{
    name: string;
    point: number;
    Skills: string[];
    // ? symbol convert a property in optional, ie: city_origin
    city_origin?: string;
}
//make an object
const character: Character = {
    name: 'Alex',
    point: 100,
    Skills: skills,
}
character.city_origin = 'Boston';
console.table(character);

// map method
let my_list: number[]=[10, 20, 30];
const numberMap = my_list.map(x => x * 2);
// filter method
const numberFilter = my_list.filter(x => x > 15);
console.log(numberMap, numberFilter);
