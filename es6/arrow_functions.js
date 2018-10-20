const ages = [14, 16, 18, 20, 22, 24, 28, 35, 40, 50, 70];

// ages.map(age => {
//   console.log(age);
// });

// ages.map((age, i) => {
//   console.log(age, i);
// });

// ages.map((age, i) => {
//   console.log(`La edad ${age} esta en la posición ${i}`);
//   // console.log('La edad ' + age + ' esta en la posición '+i);
// });

const old = ages.filter(age => age >= 40);
const young = ages.filter(age => age < 40);

const hola = () => {
  console.log('Soy un arrow function');
};

const sayHi = function() {
  console.log('Soy una expresión');
};
