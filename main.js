let myLibrary = [];

// Book object constructor
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

// loops through myLibrary and displays all books as 'card' elements
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
displayBookshelf();

// toggle displaying add book form 
const formToggler = document.querySelector('.form-toggler');
const formWrapper = document.querySelector('.form-wrapper');
formToggler.addEventListener('click', (e) => {
    if (formWrapper.style.display != 'block')
        formWrapper.style.display = 'block';
    else 
        formWrapper.style.display = 'none';
})

// add new book when add book button is pressed
const titleField = document.querySelector('input#title');
const authorField = document.querySelector('input#author');
const pageField = document.querySelector('input#num-pages');
const statusYes = document.querySelector('input#yes');
const statusNo = document.querySelector('input#no');
const addBtn = document.querySelector('.add-btn');


// change behavior for radio buttons
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // check for field completion
    let title = titleField.value;
    let author = authorField.value;
    let pageNum = pageField.value;
    let isRead = false;
    if (statusYes.checked === true)
        isRead = true;
    addBookToLibrary(title, author, pageNum, isRead);
    clearForm();
})

// methods for interacting with form content;

// function that clears all fields in add book form
function clearForm()
{
    titleField.value = '';
    authorField.value = '';
    authorField.value = '';
    pageField.value = '';
    statusYes.checked = false;
    statusNo.checked = false;
}
