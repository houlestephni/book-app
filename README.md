# Bestselling Books

Using APIs to create an app that will help readers discover their next read when they explore the week's most popular books.

[bestsellingbooks.surge.sh](bestsellingbooks.surge.sh)

![is my website responsive img](https://user-images.githubusercontent.com/53283802/73033723-df998300-3e10-11ea-8e80-5352647b59c2.png)

![screenshot of bestselling books](https://user-images.githubusercontent.com/53283802/67394788-cdd6e400-f572-11e9-961f-f25a74a1e1ac.png "Bestselling Books")
---
### Built With:

* HTML 
* CSS 
* Javascript
* jQuery

---
### APIs:

[New York Times Books](https://developer.nytimes.com/docs/books-product/1/overview)

NYT Best Sellers Lists with book details and Amazon product URLs

[Google Books](https://developers.google.com/books)

Used IBSN to capture book covers

---
## Challenges and Future Improvements:

1. The NYT API I was accessing did not include book cover images so I decided to access those through a 2nd API. I referenced each book by the IBSN rather than title however, on occasion the IBSN used by NYT was different than the primary IBSN used by Google Books. I could try to solve that issue by implementing a secondary reference if the IBSN from NYT did not match the IBSN used by Google Book API.

2. The scrolling panel was built through pure CSS but now I have experience with CSS frameworks like Bootstrap which would provide a cleaner, pre-built, solution.


---
## Created By:

Stephni Houle
