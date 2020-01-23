$(() => {
  const nytKey = "NWJFudM5pkgZOtehw9mef4b3izdYYyGT";
  const googleBooksKey = "AIzaSyCTENP17Zxt2f2wO3yp4WJtgh3tE6_GTt0";

  const getFiction = fetch(
    "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
      nytKey,
    { method: "get" }
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      updateFiction(json);
    });

  const $listName = $("<h1>")
    .text("Top Hardcover Fiction")
    .attr("id", "fiction-list")
    .appendTo("#fiction");
  const $fiction = $("<div>")
    .attr("id", "hardcover-fiction")
    .addClass("scrolling-wrapper")
    .appendTo("#fiction");
  const $buttonRight = $("<button>")
    .addClass("right-button")
    .html(">")
    .prependTo("#hardcover-fiction");
  $(".right-button").click(function() {
    event.preventDefault();
    $("#hardcover-fiction").animate(
      {
        scrollLeft: "+=280px"
      },
      "slow"
    );
  });

  function updateFiction(nytimesBestSellers) {
    nytimesBestSellers.results.forEach(function(book) {
      let bookTitle = book.book_details[0].title;
      let author = book.book_details[0].author;
      let currentRank = book.rank;
      let isbn = book.isbns[0].isbn10;
      let summary = book.book_details[0].description;

      const $div = $("<div>")
        .attr("id", book.rank)
        .addClass("card")
        .appendTo($fiction);
      const $rank = $("<p>")
        .addClass("ranking")
        .text("#" + currentRank)
        .appendTo($div);
      const $title = $("<h1>")
        .addClass("title")
        .text(bookTitle)
        .appendTo($div);
      const $author = $("<h2>")
        .addClass("author")
        .text(author)
        .appendTo($div);

      const $cover = $("<img>")
        .attr("id", "fictionCover-" + book.rank)
        .addClass("book-cover")
        .addClass("Tooltip")
        .attr("title", summary)
        .attr("src", "http://via.placeholder.com/128x195")
        .appendTo($div);
      let crawdads =
        "http://books.google.com/books/content?id=CGVDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";
      $("img#fictionCover-1").attr("src", crawdads);

      let buyLink = book.amazon_product_url;
      const link = $("<a/>")
        .attr("href", buyLink)
        .addClass("amazonLink")
        .html("BUY")
        .appendTo($div);

      updateCover(book.rank, isbn, "fiction");
    });
    const $buttonLeft = $("<button>")
      .addClass("left-button")
      .html("<")
      .appendTo("#hardcover-fiction");
    $(".left-button").click(function() {
      event.preventDefault();
      $("#hardcover-fiction").animate(
        {
          scrollLeft: "-=280px"
        },
        "slow"
      );
    });
  }

  const getNonfiction = fetch(
    "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-nonfiction&api-key=" +
      nytKey,
    { method: "get" }
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      updateNonfiction(json);
      // console.log(json);
    });

  const $listName2 = $("<h1>")
    .text("Top Hardcover Nonfiction")
    .attr("id", "nonfiction-list")
    .appendTo("#nonfiction");
  const $nonFiction = $("<div>")
    .attr("id", "hardcover-nonfiction")
    .addClass("scrolling-wrapper")
    .appendTo("#nonfiction");
  const $buttonRight2 = $("<button>")
    .addClass("right-button2")
    .html(">")
    .prependTo("#hardcover-nonfiction");
  $(".right-button2").click(function() {
    event.preventDefault();
    $("#hardcover-nonfiction").animate(
      {
        scrollLeft: "+=280px"
      },
      "slow"
    );
  });

  function updateNonfiction(nytimesBestSellers) {
    nytimesBestSellers.results.forEach(function(book) {
      let bookTitle2 = book.book_details[0].title;
      let author = book.book_details[0].author;
      let currentRank = book.rank;
      let isbn = book.isbns[0].isbn10;
      let summary = book.book_details[0].description;

      const $div = $("<div>")
        .attr("id", book.rank)
        .addClass("card")
        .appendTo($nonFiction);
      const $rank = $("<p>")
        .addClass("ranking")
        .text("#" + currentRank)
        .appendTo($div);
      const $title = $("<h1>")
        .addClass("title")
        .text(bookTitle2)
        .appendTo($div);
      const $author = $("<h2>")
        .addClass("author")
        .text(author)
        .appendTo($div);
      const $cover = $("<img>")
        .attr("id", "nonfictionCover-" + book.rank)
        .addClass("book-cover")
        .addClass("tooltip")
        .attr("title", summary)
        .attr("src", "http://via.placeholder.com/128x195")
        .appendTo($div);
      let buyLink = book.amazon_product_url;
      const link = $("<a/>")
        .attr("href", buyLink)
        .addClass("amazonLink")
        .html("BUY")
        .appendTo($div);

      updateCover(book.rank, isbn, "nonfiction");
    });
    const $buttonLeft2 = $("<button>")
      .addClass("left-button2")
      .html("<")
      .appendTo("#hardcover-nonfiction");
    $(".left-button2").click(function() {
      event.preventDefault();
      $("#hardcover-nonfiction").animate(
        {
          scrollLeft: "-=280px"
        },
        "slow"
      );
    });
  }
  function updateCover(id, isbn, genre) {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn,
      //  +"&key=" +
      // googleBooksKey,
      {
        method: "get"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let img = data.items[0].volumeInfo.imageLinks.thumbnail;
        // console.log(img);
        if (genre === "fiction") {
          $("#fictionCover-" + id).attr("src", img);
        } else if (genre === "nonfiction") {
          $("#nonfictionCover-" + id).attr("src", img);
        }
      });
  }
});
