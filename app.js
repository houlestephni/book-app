$(() => {
  const nytKey = "NWJFudM5pkgZOtehw9mef4b3izdYYyGT";
  const googleBooksKey = "AIzaSyCTENP17Zxt2f2wO3yp4WJtgh3tE6_GT";

  const getTitle = fetch(
    "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
      nytKey,
    { method: "get" }
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      updateBestSellers(json);
      console.log(json);
    });

  function updateBestSellers(nytimesBestSellers) {
    nytimesBestSellers.results.forEach(function(book) {
      let bookTitle = book.book_details[0].title;
      //   console.log(bookTitle);
      let author = book.book_details[0].author;
      let currentRank = book.rank;
      //   console.log(currentRank);
      let isbn = book.isbns[0].isbn10;
      //   console.log(isbn);
      const $div = $("<div>")
        .attr("id", book.rank)
        .addClass("card")
        .appendTo(".container");
      const $title = $("<h1>")
        .addClass("title")
        .text(bookTitle)
        .appendTo($div);
      const $author = $("<p>")
        .addClass("author")
        .text(author)
        .appendTo($div);
      const $rank = $("<p>")
        .addClass("ranking")
        .text(currentRank)
        .appendTo($div);
      const $cover = $("<img>")
        .attr("id", "cover-" + book.rank)
        .addClass("book-cover")
        .attr("src", "http://via.placeholder.com/128x195")
        .appendTo($div);

      updateCover(book.rank, isbn);
    });
  }

  function updateCover(id, isbn) {
    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        let img = data.items[0].volumeInfo.imageLinks.thumbnail;
        console.log(img);
        $("#cover-" + id).attr("src", img);
      });
  }
});
