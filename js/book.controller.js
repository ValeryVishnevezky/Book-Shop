'use strict'

function onInit() {
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
    if (books.length === 0) {
        rowsTbody += `<tr class="filter-not-found"> <td colspan="3"> We are sorry, your book is not found. <br> But you can add it!</td></tr>`
    } else {
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
    }

    elTbody.innerHTML = rowsTbody
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()

    const elModalActions = document.querySelector('.book-action')
    const elUpdateAction = document.querySelector('pre2')
    elUpdateAction.innerHTML = `<h1>The book has been successfully deleted</h1>`
    elModalActions.showModal()
    setTimeout(() => {
        elModalActions.classList.remove('hide')
        elModalActions.showModal()
    }, 500)
    setTimeout(() => {
        elModalActions.classList.add('hide')
        elModalActions.close()
    }, 3000)
}

function onUpdateBook(bookId) {
    const userPrice = prompt('Enter your price:')
    updatePrice(userPrice, bookId)
    renderBooks()

    const elModalActions = document.querySelector('.book-action')
    const elUpdateAction = document.querySelector('pre2')
    elUpdateAction.innerHTML = `<h1>Book price has been successfully updated</h1>`
    elModalActions.showModal()
    setTimeout(() => {
        elModalActions.classList.remove('hide')
        elModalActions.showModal()
    }, 500)
    setTimeout(() => {
        elModalActions.classList.add('hide')
        elModalActions.close()
    }, 3000)
}

function onAddBook() {
    const userBookName = prompt('Enter your book title:')
    const userBookPrice = prompt('Enter your book price:')
    addUserBook(userBookName, userBookPrice)
    renderBooks()

    const elModalActions = document.querySelector('.book-action')
    const elUpdateAction = document.querySelector('pre2')
    elUpdateAction.innerHTML = `<h2>Congratulations</h2><h4>Your book has been successfully added</h4>`
    elModalActions.showModal()
    setTimeout(() => {
        elModalActions.classList.remove('hide')
        elModalActions.showModal()
    }, 500)
    setTimeout(() => {
        elModalActions.classList.add('hide')
        elModalActions.close()
    }, 3000)
}

function onShowBookDetails(bookId) {
    const elModal = document.querySelector('.book-details')
    const elDetails = elModal.querySelector('pre1')

    const book = getBookById(bookId)
    elDetails.innerHTML = `<h1>${book.title}</h1><p>Price: ${book.price}</p>`
    elModal.showModal()
}

function onFilterBooks() {
    const userBookTitle = document.querySelector('.book-filter').value.toLowerCase()
    filterBooks(userBookTitle)
    renderBooks()
}

function onClearFilter() {
    document.querySelector('.book-filter').value = ''
    filterBooks('')
    renderBooks()
}