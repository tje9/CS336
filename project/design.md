DB Design:

As I'm creating this I'm finding myself torn on whether they should be seperate collections or if I could really make it one collection with the identifier of Catalog being the thing I'll query on. I just don't know how it will work because I have different fields for different collections. Will address this with Monday when we talk about it.

Movie Collection:
{
      Catalog: "Movie",
      Title: "Harry Potter",
      Length: 132,
      Director: "David Yates",
      Genre: [ "Fantasy", "Children"],
   }
   
Music Collection
   {
      Catalog: "Music",
      Title: "Thriller",
      Artist: "Michael Jackson",
      Length: ?,
      Album: "Thriller"
   }
   
Book Collection
   {
      Catalog: "Book",
      Title: "Harry Potter",
      Author: "J.K. Rowling",
      Pages: "1000"
   }
