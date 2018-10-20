const details = ['Sergio Brito', 36, 'yacafx.com'];

const [name, age, website] = details;

const names = 'Sergio,Jorge,Javier,Humberto,Juan,Alejandro';

const [captain, assistant, ...players] = names.split(',');
