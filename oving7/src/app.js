// @flow
let v1 = [1, 2, 3];
let v2 = [4, 5, 6];

console.log('Oppgave 1: \n');
console.log('2 + v1:', v1.map(e => 2 + e));
console.log('2 * v1:', v1.map(e => 2 * e));
console.log('mean of v1:', v1.reduce((acc, e) => (e + acc) / acc));
console.log('v1 dot v2:', v1.map((e, i) => e * v2[i]).reduce((acc, e) => acc + e));
console.log('sum of v1 + 2 * v2:', v1.reduce((acc, e) => acc + e) + 2 * v2.reduce((acc, e) => acc + e));
console.log('v1 as string:', v1.map((e, i) => 'v1[' + i + '] = ' + e));


console.log('\nOppgave 2: \n');

//wolframalpha
class Complex {
    real: number;
    imag: number;

    constructor(real: number, img: number) {
        this.real = real;
        this.imag = img;
    }
}

let v = [new Complex(2, 2), new Complex(1, 1)];

console.log('v elements as strings:', v.map(e => e.real + ' + ' + e.imag + 'i'));
console.log('magnitude of v elements:', v.map(e => Math.sqrt(Math.pow(e.real, 2) + Math.pow(e.imag, 2))));
console.log('sum of v:', new Complex(v.reduce((acc, e) => acc + e.real, 0), v.reduce((acc, e) => acc.imag + e.imag)));

console.log('\nOppgave 3: \n');
let students = [{name: 'Ola', grade: 'A'}, {name: 'Kari', grade: 'C'}, {name: 'Knut', grade: 'C'}];

console.log('students elements as strings:', students.map(e => e.name + ' got ' + e.grade));
console.log('How many got C:', students.filter(e => e.grade === 'C').length);
console.log('Percentage of C grades:', students.filter(e => e.grade === 'C').length / students.length);
console.log('Did anyone get A:', students.some(e => e.grade === 'A') ? 'Yes' : 'No');
console.log('Did anyone get F:', students.some(e => e.grade === 'F') ? 'Yes' : 'No');