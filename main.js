let myLibrary = [];
function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;

    this.info = function() {
        return(
        `${title} by ${author}, ${numPages} pages, ${isRead ? 'already read' : 'not read yet'}`)
    }
}

// creates new book object from parameters and pushes it onto 'myLibrary'
function addBookToLibrary(title, author, numPages, isRead) {
    // create new book object
    let newBook = new Book(title, author, numPages, isRead);
    // push into myLibrary
    myLibrary.push(newBook);
}

const bookshelf = document.querySelector('.bookshelf');

function displayBookshelf()
{
    myLibrary.forEach(function(book){
        newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.textContent = book.info();
        bookshelf.appendChild(newCard);
    })
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 255, true);
console.log(myLibrary);
displayBookshelf();