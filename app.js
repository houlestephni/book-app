$(() => {
  const apiKey = "NWJFudM5pkgZOtehw9mef4b3izdYYyGT";

  const getTitle = fetch(
    "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
      apiKey,
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
      console.log(bookTitle);

      //   let isbn = book.isbns[1].isbn10;
      //   let bookInfo = book.book_details[0];
      //   let lastWeekRank = book.rank_last_week || "n/a";
      //   let weeksOnList = book.weeks_on_list || "New this week";

      const $title = $("<h1>")
        .addClass("title")
        .text(bookTitle)
        .appendTo(".container");
    });
  }
});
