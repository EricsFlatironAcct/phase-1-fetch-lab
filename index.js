function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp =>resp.json())
  .then(json =>renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');

  //displays each book as a header and adds number of pages
  let totalPages =0;
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    totalPages+=book.numberOfPages;
  });
  console.log(books);
  console.log(`The 5th book in the series is ${books[4].name}`) //logs the 5th book in the series
  console.log(`The total number of pages in the series is ${totalPages}`);
  //retrieves the 1031st character and logs to console
  fetch("https://anapioficeandfire.com/api/characters/1031")
  .then(resp =>resp.json())
  .then(json=>console.log(`The 1031st character is ${json.name}`))


}

document.addEventListener('DOMContentLoaded', function() {
 fetchBooks();

});