$(() => {
  const nytKey = "NWJFudM5pkgZOtehw9mef4b3izdYYyGT";
  const googleBooksKey = "AIzaSyCTENP17Zxt2f2wO3yp4WJtgh3tE6_GTt0";
  // const getTitle = fetch(
  //   "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=" +
  //     apiKey,
  //   { method: "get" }
  // )
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(json => {
  //     updateBestSellers(json);
  //     console.log(json);
  //   });
  // // function updateBestSellers(nytimesBestSellers) {
  // //   nytimesBestSellers.results.forEach(function(book) {
  // //     let bookTitle = book.book_details[0].title;
  // //     console.log(bookTitle);

  // //     const $title = $("<h1>")
  // //       .addClass("title")
  // //       .text(bookTitle)
  // //       .appendTo(".container");
  // //   });
  // // }
  // function updateBestSellers(nytimesBestSellers) {
  //   nytimesBestSellers.results.lists.forEach(function(book) {
  //     let bookTitle = book.books[0].title;
  //     //   console.log(bookTitle);
  //     let currentRank = book.books[0].rank;
  //     const $title = $("<h1>")
  //       .addClass("title")
  //       .text(bookTitle)
  //       .appendTo(".container");
  //     const $rank = $("<p>")
  //       .addClass("ranking")
  //       .text(currentRank)
  //       .appendTo(".container");
  //   });
  // }
  let listType = "hardcover-fiction";

  $.ajax({
    url: `https://api.nytimes.com/svc/books/v3/lists.json?list-name=${listType}&api-key=${nytKey}`,
    type: "GET"
    // data: {
    //   $limit: 5
    // }
  }).then(displayList);
  console.log(displayList);

  const displayList = listType => {};
});
