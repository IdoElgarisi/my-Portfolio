'use strict';

const KEY = 'bookDB';
const PAGE_SIZE = 5;
var gPageIdx = 0;

var gBooks;
var gTitles = ['The Dark Side Of The Moon', 'Chronicles', 'The Bible', 'Ha-sadna']
var gFilterBy = 'all';
var gSortBy = 'none';
_createBooks();
function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) {
        gPageIdx = 0;
    }
}
function getTitle() {
    return gTitles
}
function getBooks() {
    var sortedBooks = gBooks.slice().sort(sortBy)
    if (gSortBy === 'none') return sortedBooks;

    var startIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
    
}

function deleteBook(bookId) {
    if (confirm('Delete This Book?')) {

        var bookIdx = gBooks.findIndex(function (book) {
            return bookId === book.id
        })
        gBooks.splice(bookIdx, 1)
        _saveBooksToStorage();
    }
}

function addBook(title, price) {
    var book = _createBook(title, price)
    gBooks.unshift(book)

    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}

function updateBook(bookId, newPrice) {
    console.log('bookId', bookId)
    var book = getBookById(bookId);
    console.log('book', book)
    book.price = newPrice;
    onCloseUpdateModal();
    _saveBooksToStorage();
}

function _createBook(title, price) {
    return {
        id: makeId(),
        title,
        price,
        desc: makeLorem(),
        rate: 0
    }
}

function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []
        for (let i = 0; i < gTitles.length; i++) {
            var title = gTitles[i]
            var price = 20;
            books.push(_createBook(title, price))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function decreaseRate(book) {
    console.log('book', book);
    if (book.rate === 0) return;
    if (book.rate > 0) { book.rate-- }
    document.querySelector('.book-rate').innerText = book.rate;
    renderBooks()
    _saveBooksToStorage();

}

function increaseRate(book) {
    console.log('book', book);
    if (book.rate < 0 || book.rate === 10) return;
    book.rate++
    document.querySelector('.book-rate').innerText = book.rate;
    _saveBooksToStorage();
    renderBooks()

}

function sortBy(t1, t2) {
    switch (gSortBy) {
        case 'title':
            return t1.title.localeCompare(t2.title);
        case 'rating':
            return t1.rate - t2.rate;
        default:
            return 0;
    }
 
}

function setSortBy(sortBy) {
    gSortBy = sortBy;
    
}