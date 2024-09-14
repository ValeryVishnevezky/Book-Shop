'use strict'

const BOOKS_KEY = 'books'
var gFilteredBooks = null

function initBooks() {
    var books = loadFromStorage(BOOKS_KEY)

    if (!books) {
        books = [
            {id: makeid(6),
                title: 'Harry Potter',
                price: 260,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Little Prince',
                price: 150,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Da Vinci Code',
                price: 450,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Dune',
                price: 400,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Alchemist',
                price: 200,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Hobbit',
                price: 300,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Alice\'s Adventures in Wonderland',
                price: 100,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Angels & Demons',
                price: 70,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'War and Peace',
                price: 110,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Diary of Anne Frank ',
                price: 250,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Adventures of Pinocchio',
                price: 50,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Godfather',
                price: 400,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Lust for Life',
                price: 90,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'James and the Giant Peach',
                price: 30,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Andromeda Nebula',
                price: 120,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'The Women\'s Room',
                price: 400,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Matilda',
                price: 40,
                imgUrl: 'lori-ipsi.jpg'},
            {id: makeid(6),
                title: 'Me Before You',
                price: 50,
                imgUrl: 'lori-ipsi.jpg'},
        ]
        saveToStorage(BOOKS_KEY, books)
    }
    return books
}

const gBooks = initBooks()
console.log(gBooks)

function getBooks() {
    return gFilteredBooks || gBooks
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

function filterBooks(userBookTitle) {
    gFilteredBooks = gBooks.filter(book => book.title.toLowerCase().includes(userBookTitle))
}

function updateStatistic() {
    var expensiveBooksCount = 0
    var averageBooksCount = 0
    var cheapBooksCount = 0

    gBooks.forEach(book => {
        if (book.price > 200) {
            expensiveBooksCount++
        } else if (book.price >= 80 && book.price <= 200) {
            averageBooksCount++
        } else if (book.price < 80) {
            cheapBooksCount++
        }
    })
    return {expensiveBooksCount, averageBooksCount, cheapBooksCount}
}

function _saveBooks() {
    saveToStorage(BOOKS_KEY, gBooks)
}