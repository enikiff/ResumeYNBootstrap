function Library()
{
  this.bookShelf = new Array();

}

Library.prototype.addBook = function(book)
{
      for(var i=0; i < this.bookShelf.length; i++){
          if(this.bookShelf[i].title===book.title){
          return false;
          }
      }
this.bookShelf.push(book);
return true;
};

Library.prototype.removeBookByAuthorName = function(author)
{
      for(var i=0; i < this.bookShelf.length; i++){
          if(this.bookShelf[i].author===author){
          this.bookShelf.splice(i, 0);
          return true;
          }
      }
  return false;
};

Library.prototype.removeBookByTitle = function(title)
{
  for(var i=0; i < this.bookShelf.length; i++){
        if(this.bookShelf[i].title === title){
          this.bookShelf.splice(i,1);
          return true;
        }
      }

return false;

};

Library.prototype.getRandomBook = function(book)
{
  for(var i=0; i < this.bookShelf.length; i++){
      return Math.book(Math.random()*bookShelf.length);
        }
      }

return null;

};





function random_item(items)
{

return items[Math.floor(Math.random()*items.length)];

}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));










document.addEventListener("DOMContentLoaded", function(e){
 window.gLibrary = new Library();
 book1 = new Book("IT", "SK", 200,"Jan 1th");
 book2 = new Book("Drama", "SK", 300,"Jan 15th");
 book3 = new Book("IT", "Garry Poter", 30,"Okt 66th");
 book4 = new Book("Comedy", "Garry", 40,"Sep 66th");
 book5 = new Book("Comedy", "SK", 130,"March 66th");
 book6 = new Book("Comedy", "Egor", 130,"March 66th");



 gLibrary.addBook(book1);
 gLibrary.addBook(book2);
 gLibrary.addBook(book3);
 gLibrary.addBook(book4);
 gLibrary.addBook(book5);
 gLibrary.addBook(book6);

});
