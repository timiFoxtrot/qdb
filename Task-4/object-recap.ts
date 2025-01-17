interface Book {
  title: string;
  author: string;
  isAvailable: boolean;
  ratings: number[];
}

class Library {
  name: string;
  location: string;
  numberOfBooks: number;
  categories: string[];
  books: Book[];

  constructor(
    name: string,
    location: string,
    numberOfBooks: number,
    categories: string[],
    books: Book[]
  ) {
    this.name = name;
    this.location = location;
    this.numberOfBooks = numberOfBooks;
    this.categories = categories;
    this.books = books;
  }

  getAvailableBooks() {
    return this.books;
  }

  addBook(newBook: Book) {
    return this.books.push(newBook);
  }

  calculateAverageRating(title: string) {
    const book = this.books.find((book) => book.title === title);
    if (!book) return null;

    const averageRating =
      book.ratings.reduce((acc, curr) => acc + curr, 0) / book.ratings.length;

    return averageRating.toFixed(2);
  }
}

const myLibrary = new Library(
  "Timi's Library",
  "Lagos",
  5,
  ["Fiction", "Non-Fiction", "Science"],
  []
);

// Interact with the Object
myLibrary.addBook({
  title: "first book",
  author: "Timi",
  isAvailable: false,
  ratings: [4.5, 4, 3.7],
});
myLibrary.addBook({
  title: "Second book",
  author: "Foxtrot",
  isAvailable: true,
  ratings: [4, 3.5, 3.7],
});
myLibrary.addBook({
  title: "Third book",
  author: "John",
  isAvailable: false,
  ratings: [5, 4.8, 4.6],
});

console.log(myLibrary.getAvailableBooks());

console.log(myLibrary.calculateAverageRating("first book"));

myLibrary.categories.push("Technology");
console.log(myLibrary.categories)

// Iterate Over the Object
for (let key in myLibrary) {
  let value = myLibrary[key as keyof Library];

  if (Array.isArray(value)) {
    for (let item of value) {
      console.log(item);
    }
  } else {
    console.log(value);
  }
}

// Compare Objects
const duplicateLibrary = { ...myLibrary };
console.log(duplicateLibrary === myLibrary);
// This is false because they have different locations in memory, eventhough their values are the same.
