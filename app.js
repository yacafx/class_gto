const books = [
  {
    id: 123,
    title: 'Bad Blood',
    author: 'Murakami'
  },
  {
    id: 65379,
    title: 'La biblia',
    author: 'Murakami'
  },
  {
    id: 1234,
    title: 'IQ84',
    author: 'Murakami'
  },
  {
    id: 9764,
    title: 'Memoria de mis putas tristes',
    author: 'Murakami'
  },
  {
    id: 546456,
    title: 'Norwegian Wood',
    author: 'Murakami'
  }
];

const id = 1234;

const currentBook = {
  id: 9764,
  title: 'Memoria de mis putas tristes',
  author: 'Gabriel García Marquez'
};

const selectedBook = books.find(book => book.id === id);

// const selectedBook2 = books.find(
//   book => book == currentBook
// );

// const selectedBook3 = books.findIndex((book, i) => {
//   if (book.id === id) {
//     console.log(book);
//     return i;
//   }
// });

const selectedBook3 = books.findIndex(
  book => book.id === id
);

const murakamiBooks = books.every(
  book => book.author === 'Murakami'
);

const murakamiBooks2 = books.some(
  book => book.author === 'Murakami'
);
