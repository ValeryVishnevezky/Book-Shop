'use strict'

function onInit() {
    initBooks()
    renderBooks()
}

function renderBooks() {
    const elTable = document.querySelector('table')
    const books = getBooks()

    elTable.innerHTML = `
    <thead>
    <tr class="table-titles">
          <td class="title">Title</td>
          <td class="price">Prise</td>
          <td class="actions">Actions</td>
        </tr>
        </thead>
        <tbody></tbody>`

    const elTbody = elTable.querySelector('tbody')
    var rowsTbody = ''

    books.forEach(book => {
        rowsTbody += `<tr class="book">
    <td class="book-title">${book.title}<button class="book-details-button" onClick = "onShowBookDetails('${book.id}')">i</button></td>
    <td class="book-price">${book.price}</td>
    <td class="book-actions">
      <button class="button-read">Read</button>
      <button class="button-update" onClick = "onUpdateBook('${book.id}')">Update</button>
      <button class= "button-delete" onClick = "onRemoveBook('${book.id}')">Delete</button>
    </td>
  </tr>`
    })
    elTbody.innerHTML = rowsTbody
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId) {
    const userPrice = prompt('Enter your price:')
    updatePrice(userPrice, bookId)
    renderBooks()
}

function onAddBook() {
    const userBookName = prompt('Enter your book title:')
    const userBookPrice = prompt('Enter your book price:')
    addUserBook(userBookName, userBookPrice)
    renderBooks()
}

function onShowBookDetails(bookId){
    const elModal = document.querySelector('.book-details')
    const elDetails = elModal.querySelector('pre')

    const book = getBookById(bookId)
    elDetails.innerHTML = `<h1>${book.title}</h1><p>Price: ${book.price}</p>`
    elModal.showModal()
}
