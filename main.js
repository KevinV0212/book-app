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
    let index = 0;
    myLibrary.forEach(function(book){
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.textContent = book.info();


        //add delete button to entry
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', `${index++}`)
        deleteButton.innerHTML = 'x';
        newCard.appendChild(deleteButton);
        bookshelf.appendChild(newCard);
    })

    addDeleteListeners();
}

addBookToLibrary('test1', 'J.R.R. Tolkien', 255, true);
addBookToLibrary('test2', 'J.R.R. Tolkien', 255, true);
addBookToLibrary('test3', 'J.R.R. Tolkien', 255, true);

displayBookshelf();

// toggle displaying add book form 
const formToggler = document.querySelector('.form-toggler');
const formWrapper = document.querySelector('.form-wrapper');
formToggler.addEventListener('click', toggleForm)

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
    toggleForm();
    clearBookshelf();
    displayBookshelf();
})


// function that adds listeners to delete buttons to remove cards
function addDeleteListeners() {
    let deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            myLibrary.splice(+index, 1);
            clearBookshelf();
            displayBookshelf();
        })
    })
}

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

function toggleForm() {
    if (window.getComputedStyle(formWrapper).display === 'block')
        formWrapper.style.display = 'none';
    else 
        formWrapper.style.display = 'block';
}

function clearBookshelf() {
    bookshelf.innerHTML = '';
}

// function that removes Book at 'index' from myLibrary:
function deleteBook(index) {

}

