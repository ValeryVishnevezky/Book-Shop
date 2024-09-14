
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

    books.forEach(book => {
        rowsTbody += `<tr class="book">
    <td class="book-title">${book.title}</td>
    <td class="book-price">${book.price}</td>
    <td class="book-actions">
      <button class="read">Read</button>
      <button class="update" onClick = "onUpdateBook('${book.id}')">Update</button>
      <button class= "delete" onClick = "removeBook('${book.id}')">Delete</button>
    </td>
  </tr>`
    })
    elTbody.innerHTML = rowsTbody
}

function onUpdateBook(bookId){
    const userPrice = prompt('Enter your price:')
    updatePrice(userPrice, bookId)
    renderBooks()
}