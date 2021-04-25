interface Player{
    volume: number;
    second: number;
    song: number;
    detail: Details;
}

interface Details{
    author: string;
    year: number;
}

const playing: Player = {
    volume: 90,
    second: 36,
    song: 12,
    detail: {
        author: 'Nirvana',
        year: 2020,
    }
}
console.log('the second is' , playing.second )
console.log('the author is', playing.detail.author)
console.log('the year is', playing.detail.year)
//distructured objects
const {volume, second, detail} = playing;
/* in the above const statement is necessary call the 'detail' property
to be used in the declaration below */
const { author } = detail;
const {year} = detail
console.log('the volume is', volume);
console.log('the author is', author);
console.log('the secund is', second);
console.log('the year is', year)
//the return show similar values
//second option, one line statements
//const {volume, second, song, detail: { author }} = playing;
//it's advises not use one line method, it can cause confusion date type