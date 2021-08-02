'use strict';
var gCurrBook;
function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    var count = 0;
    var tableHead = ` 
      <thead>
    <tr class="info">
        <td class="id">Id</td>
        <td class="title">Title</td>
        <td class="price">Price</td>
        <td class="actions" colspan="3">Actions</td>
    </tr>
</thead>`

    var strHtmls = books.map(function (book) {
        count++
        return `
                <tr>
                <td class="book-id">${count}</td>
                <td class="book-title">${book.title}</td>
                <td class="book-price">${(book.price)} &#8362</td>
                <td class="book-read">
                <button type="button" onclick="onReadBook('${book.id}')">Read</button>
                </td>
                <td class="book-update">
                <button type="button" onclick="onOpenUpdateModal('${book.id}')">Update</button>
                </td>
                <td class="book-delete">
                <button type="button" onclick="onDeleteBook('${book.id}')">Delete</button>
                </td>
                </tr> 
                `
    })

    document.querySelector('.books-container').innerHTML = tableHead + strHtmls.join('');
}

function onCreateBook() {
    // var vendor = document.querySelector('[name=vendorList]').value;
    var title = document.querySelector('[name="bookName"]').value;
    var price = document.querySelector('[name="bookPrice"]').value;
    addBook(title, price)
    renderBooks()
}

function onRevealBookAdd() {
    var bookData = document.querySelector('.book-details');
    bookData.style.display = "flex"

}

function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks()
}

function onOpenUpdateModal(bookId) {
    gCurrBook = getBookById(bookId)
    var bookUpdateModal = document.querySelector('.update');
    bookUpdateModal.style.display = "flex";

}

function onUpdateBook(bookId = gCurrBook.id) {
    var newPrice = document.querySelector('[name="newBookPrice"]').value;
    updateBook(bookId, newPrice);
    renderBooks();
}


function onReadBook(bookId) {
    var book = getBookById(bookId)
    gCurrBook = book;
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h2').innerText = book.title
    elModal.querySelector('h3').innerText = 'Price : ' + book.price;
    elModal.querySelector('p').innerText = book.desc
    elModal.hidden = false;
    

}

function onCloseModal() {
    document.querySelector('.modal').hidden = true
}

function onNextPage() {
    nextPage();
    renderBooks();
}

function onCloseUpdateModal() {
    var bookUpdateModal = document.querySelector('.update');
    bookUpdateModal.style.display = "none";
}

function onCloseCreateModal() {
    var bookData = document.querySelector('.book-details');
    bookData.style.display = "none"

}

function onDecreaseRate(bookId = gCurrBook.id) {
    var book = getBookById(bookId)
    decreaseRate(book)

}

function onIncreaseRate(bookId = gCurrBook.id) {
    console.log('rate-up')
    var book = getBookById(bookId)
    increaseRate(book)

}

function onSetSort(sortBy) {
    console.log('sortBy',sortBy)
    setSortBy(sortBy);
    renderBooks();
}
