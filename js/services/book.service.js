'use strict'

const BOOKS_KEY = 'books'

function initBooks() {
    var books = loadFromStorage(BOOKS_KEY)

    if (!books) {
        books = [
            {
                id: makeid(6),
                title: 'Harry Potter',
                price: 260,
                imgUrl: 'lori-ipsi.jpg'
            },
            {
                id: makeid(6),
                title: 'The Little Prince',
                price: 150,
                imgUrl: 'lori-ipsi.jpg'
            },
            {
                id: makeid(6),
                title: 'The Da Vinci Code',
                price: 170,
                imgUrl: 'lori-ipsi.jpg'
            },
            {
                id: makeid(6),
                title: 'Dune',
                price: 350,
                imgUrl: 'lori-ipsi.jpg'
            },
            {
                id: makeid(6),
                title: 'The Godfather',
                price: 200,
                imgUrl: 'lori-ipsi.jpg'
            }
        ]
        saveToStorage(BOOKS_KEY, books)
    }
    return books
}

const gBooks = initBooks()
console.log(gBooks)

function getBooks() {
    return gBooks
}


function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
    _saveBooks()
}

function updatePrice(price, bookId) {
    gBooks.find(book => {
        if (book.id === bookId) {
            return book.price = price
        }
    })
    _saveBooks()
}

function addUserBook(title, price) {
    const userBook = {
        id: makeid(6),
        title: title,
        price: price,
        imgUrl: 'lori-ipsi.jpg'
    }
    gBooks.push(userBook)
    _saveBooks()
}

function getBookById(bookId) {
    return gBooks.find(book => book.id === bookId)
}

function _saveBooks() {
    saveToStorage(BOOKS_KEY, gBooks)
}