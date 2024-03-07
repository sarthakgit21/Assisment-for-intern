const books = [
  {
    title: "Success",
    cover:
      "https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg",
    author: "Author 1",
    genre: "Fiction",
    pages: 150,
  },
  {
    title: "Different Winter",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQOA21DQhrqTRlJ3kLYjtD2ePLW84oW2XszfvF994nw&s",
    author: "Author 2",
    genre: "Fantasy",
    pages: 220,
  },
  {
    title: "Adventure Awaits",
    cover:"https://img.freepik.com/free-vector/modern-annual-report-business-flyer-template-design_1017-25864.jpg?size=338&ext=jpg"
    ,author: "Author 3",
    genre: "Adventure",
    pages: 180,
  },
  {
    title: "Mystery of the Old Mansion",
    cover:"https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?size=626&ext=jpg"
    ,author: "Author 4",
    genre: "Mystery",
    pages: 200,
  },
  {
    title: "Love in Paris",
    cover:"https://img.freepik.com/free-vector/orange-annual-report-template_1409-157.jpg?size=338&ext=jpg"
    ,author: "Author 5",
    genre: "Romance",
    pages: 170,
  },
  {
    title: "The Enchanted Forest",
    cover:"https://img.freepik.com/free-vector/bike-guy-wattpad-book-cover_23-2149452163.jpg?size=338&ext=jpg",
    author: "Author 6",
    genre: "Fantasy",
    pages: 190,
  },
  {
    title: "Science Unleashed",
    cover:"https://img.freepik.com/free-psd/book-hardcover-mockup_125540-382.jpg?size=338&ext=jpg",
    author: "Author 7",
    genre: "Science Fiction",
    pages: 210,
  },
  {
    title: "The Last Hope",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&usqp=CAU",
    author: "Author 8",
    genre: "Dystopian",
    pages: 220,
  },
  {
    title: "Echoes of Eternity",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiohi1eIbD_qjoNWiPex9iROBe9qn-oHOIVoEbnD_bPj0uDolNU6B83lpAB2G_qqy7qo&usqp=CAU",
    author: "Author 9",
    genre: "Fantasy",
    pages: 180,
  },
  {
    title: "The Art of War",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRZkvPRdnEDzfwIR1aI5VJWmrVpPaMvWR2w&usqp=CAU",
    author: "Sun Tzu",
    genre: "Non-Fiction",
    pages: 120,
  },
  {
    title: "The Great Gatsby",
    cover:
      "https://cdn.pixabay.com/photo/2016/03/09/15/10/book-1245690_960_720.jpg",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    pages: 200,
  },
  {
    title: "To Kill a Mockingbird",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXGXc3gY4jQpZfz5o9hvblo_ZWamnsQ-o3g&usqp=CAU",
    author: "Harper Lee",
    genre: "Classic",
    pages: 280,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRZkvPRdnEDzfwIR1aI5VJWmrVpPaMvWR2w&usqp=CAU",
    author: "J.K. Rowling",
    genre: "Fantasy",
    pages: 320,
  },
  {
    title: "1984",
    cover:
      "https://cdn.pixabay.com/photo/2016/03/09/15/10/book-1245690_960_720.jpg",
    author: "George Orwell",
    genre: "Dystopian",
    pages: 250,
  },
  {
    title: "Brave New World",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRZkvPRdnEDzfwIR1aI5VJWmrVpPaMvWR2w&usqp=CAU",
    author: "Aldous Huxley",
    genre: "Dystopian",
    pages: 270,
  },
  {
    title: "Pride and Prejudice",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRZkvPRdnEDzfwIR1aI5VJWmrVpPaMvWR2w&usqp=CAU",
    author: "Jane Austen",
    genre: "Classic",
    pages: 300,
  },
  {
    title: "The Catcher in the Rye",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXGXc3gY4jQpZfz5o9hvblo_ZWamnsQ-o3g&usqp=CAU",
    author: "J.D. Salinger",
    genre: "Classic",
    pages: 230,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRZkvPRdnEDzfwIR1aI5VJWmrVpPaMvWR2w&usqp=CAU",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 400,
  },
  {
    title: "The Hunger Games",
    cover:
      "https://cdn.pixabay.com/photo/2016/03/09/15/10/book-1245690_960_720.jpg",
    author: "Suzanne Collins",
    genre: "Science Fiction",
    pages: 300,
  },
];

let currentIndex = 0;
const bookCover = document.getElementById("book-cover");
const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");
const genre = document.getElementById("genre");
const pages = document.getElementById("pages");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function displayBook(index) {
  const book = books[index];
  bookCover.src = book.cover;
  bookTitle.textContent = book.title;
  author.textContent = `Author: ${book.author}`;
  genre.textContent = `Genre: ${book.genre}`;
  pages.textContent = `Pages: ${book.pages}`;
}

displayBook(currentIndex);

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + books.length) % books.length;
  displayBook(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % books.length;
  displayBook(currentIndex);
});
