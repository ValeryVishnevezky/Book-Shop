
// const BOOKS_KEY = 'books'
// _getBooks()

const gBooks = [
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

function getBooks() {
return gBooks
}


function removeBook(bookId){
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
    renderBooks()
}