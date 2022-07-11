// console.log(test(t));
// var t = 12;
// function test(e) {
//   console.log('harsh', e);
// // }

const a = {};


// let obj = {'name' : 'neeraj'};
// obj['name'] = 'ajay';

// console.log(obj);
const b = {c:'b'};
const c = {b:'c'};
a[b] = 111;
console.log(JSON.stringify(JSON.parse(Object.keys(a))));
// a[c] = 333;
// console.log(a);
// console.log(a[b]);

// // Map
// let map = new Map();
// map.set(a, 111);
// map.set(b, 420);
// console.log(map);