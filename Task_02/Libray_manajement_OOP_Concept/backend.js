let addBook = document.getElementById('addBook');
let deleteBook = document.getElementById('deleteBook');
let findBook = document.getElementById('findBooks');
let isshueBook = document.getElementById('isshuBook');
let returnBook = document.getElementById('returnBooks');
const bookList = document.getElementById("bookList");
console.log(isshueBook);

class Library {
    constructor() {
        this.books = [
    "Eloquent JavaScript",
    "You Don't Know JS",
    "Clean Code",
    "JavaScript: The Good Parts",
    "Effective Java",
    "Python Crash Course",
    "Head First Java",
    "Learning React",
    "The Pragmatic Programmer",
    "Cracking the Coding Interview"
];
    }

    addBook(book) {
        this.books.push(book);
    }
    deleteBook(book) {
        const index = this.books.indexOf(book);
        if (index != -1) {
            console.log(index);
            this.books.splice(index, 1);
        }
        else {
            return "Book Not find";
        }
    }
    findBook(book) {
        const find = this.books.includes(book);
        return this.books.includes(book);
    }
    isshueBook(book) {
        const isshue = this.books.includes(book);
        if (isshue) {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1);

            alert("Yes book Isshues");
        }
        else
            alert("No Book Find");
    }
    returnBook(book) {
        this.books.push(book);
        renderBooks();
    }


}
let book = new Library();
renderBooks();
if (addBook) {
    addBook.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            book.addBook(addBook.value);
            addBook.value = "";
            renderBooks();
        }
    });
}

if (deleteBook) {
    deleteBook.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log(deleteBook.value);
            book.deleteBook(deleteBook.value);
            renderBooks();
        }
    });
}
if (findBook) {
    findBook.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const check = book.findBook(findBook.value);
            if (check) {
                alert("Book Is Available");
            }
            else
                alert("Book is not avaiable");
        }
    });
}

if (isshueBook) {
    isshueBook.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            console.log("Issue");
            book.isshueBook(isshueBook.value);
            renderBooks();
        }
    });
}

if (returnBook) {
    returnBook.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            book.returnBook(returnBook.value);
            renderBooks();
        }
    });
}




function renderBooks() {
    bookList.innerHTML = "";

    book.books.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item}</td>
        `;

        bookList.appendChild(row);
    });
}