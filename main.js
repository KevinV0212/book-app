const titleField = document.querySelector('input#title');
const authorField = document.querySelector('input#author');
const pageField = document.querySelector('input#num-pages');
const statusYes = document.querySelector('input#yes');
const statusNo = document.querySelector('input#no');
const addBtn = document.querySelector('.add-btn');
const formError = document.querySelector('.form-error');

let myLibrary = [];

// Book object constructor
// function Book(title, author, numPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.isRead = isRead;

//     this.info = function() {
//         return(
//         `${title} by ${author}, ${numPages} pages, ${isRead ? ' read' : 'rot read yet'}`)
//     }
// }

class Book{
    constructor(title, author, numPages, isRead) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isRead = isRead;
    }
    get info() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead ? ' read' : 'rot read yet'}`
    }
}

// creates new book object from parameters and pushes it onto 'myLibrary'
function addBookToLibrary(title, author, numPages, isRead) {
    // create new book object
    let newBook = new Book(title, author, numPages, isRead);
    // push into myLibrary
    myLibrary.push(newBook);
}

const books = document.querySelector('.books');

// loops through myLibrary and displays all books as 'card' elements
function displayBookshelf()
{
    let index = 0;
    myLibrary.forEach(function(book){
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        cardInfo.textContent = book.info;


        //add delete button to entry
        let cardControls = document.createElement('card-controls');
        cardControls.classList.add('card-controls');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', `${index++}`)
        deleteButton.innerHTML = 'x';
        cardControls.appendChild(deleteButton);


        // append card sections
        newCard.appendChild(cardInfo);
        newCard.appendChild(cardControls);

        books.appendChild(newCard);
    })

    addDeleteListeners();
}

// toggle displaying add book form 
const formToggler = document.querySelector('.form-toggler');
const formWrapper = document.querySelector('.form-wrapper');
formToggler.addEventListener('click', toggleForm)



// change behavior for radio buttons
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // check for field completion
    let title = titleField.value;
    let author = authorField.value;
    let pageNum = pageField.value;
    let isRead = false;
    if (statusYes.checked === true)
    {
        isRead = true;
    }
        
    if (!isFilled())
    {
        formError.textContent = 'Please fill in all fields *';
        return;
    }
    addBookToLibrary(title, author, pageNum, isRead);
    clearForm();
    toggleForm();
    clearBooks();
    displayBookshelf();
})


// function that adds listeners to delete buttons to remove cards
function addDeleteListeners() {
    let deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            myLibrary.splice(+index, 1);
            clearBooks();
            displayBookshelf();
        })
    })
}

// function that checks if all of the input fields are filled in
function isFilled() {
    return (titleField.value && authorField.value && pageField.value && 
        (statusYes.checked || statusNo.checked))
}

// function that clears all fields in add book form
function clearForm()
{
    titleField.value = '';
    authorField.value = '';
    authorField.value = '';
    pageField.value = '';
    statusYes.checked = false;
    statusNo.checked = false;
    formError.textContent = '';
}

function toggleForm() {
    if (window.getComputedStyle(formWrapper).display === 'block')
        formWrapper.style.display = 'none';
    else 
        formWrapper.style.display = 'block';
}

function clearBooks() {
    books.innerHTML = '';
}

