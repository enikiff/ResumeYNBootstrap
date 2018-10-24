  function DataTable()
  {
    Library.call(this);
    this.$container = $('#data-table');
    this.newBookArray = [];
    var editBookArray = [];
  }

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function()
      {
        this._bindEvents();
        this._updateStorage();
      };

DataTable.prototype._bindEvents = function ()
      {
        $(document).on('submit', $.proxy(this._handleSearch, this));
        $(document).on('click', $.proxy(this._updateStorage,this));
        $(document).on('objUpdate', $.proxy(this._updateTable, this));
        $(document).on('click','.deleteBox',$.proxy(this._handleDelete,this));
        $(document).on('click','.editBox',$.proxy(this._handleEdit,this));

      };



// DataTable.prototype._handleSearch = function (e)
// {
//   e.preventDefault();
//   var serArr = $('#search-form').serializeArray();
//   var myObj = {};
//   $.each(serArr,function(index, entry){
//     if(entry.value){
//       myObj[entry.name] = entry.value;
//     }
//   });
//   var searchResults = this.search(myObj);
//   this.handleEventTrigger('objUpdate', searchResults);
//
//   return false;
// };

DataTable.prototype._handleDelete = function (e) {
  var bookTitle = "";
  var myTd;
  bookTitle = $(e.target).data('title');//BY USING .DATA ATTRIBUTE
  if (confirm("Are you sure you want to delete " + bookTitle +'?')) {
    this.removeBookByTitle(bookTitle);
    this._makeTable(window.bookShelf);
    return true;
  }
  return false;

};

DataTable.prototype._handleEdit = function (e)
{

    //var bookTitle = "";
    var title = $(e.target).closest('tr').children()[1];
    var author = $(e.target).closest('tr').children()[2];
    var synopsis = $(e.target).closest('tr').children()[3];
    var pages = $(e.target).closest('tr').children()[4];
    //var date = $(e.target).closest('tr').children()[5];
    //var rating = $(e.target).closest('tr').children()[6];//THROUGH DOM TRAVERSAL
// -------------------------------------------------------//
    var bookTitle = $(title).text();
    var bookAuthor = $(author).text();
    var bookSynopsis = $(synopsis).text();
    var bookPages = $(pages).text();
    //var bookDate = $(date).text();
    //var bookRating = $(rating).text();

    if (confirm("Do you want to edit this book " + '"' + bookTitle + '" ' + '?')) {
    $('#add-books-modal').modal('show');

    //var getCover = $("#add-book-cover-image").attr("src");
    var editTitle = $("#title-add-input").val(bookTitle);
    var editAuthor =$("#author-add-input").val(bookAuthor);
    var editSynopsis =$("#synopsis-add-input").val(bookSynopsis);
    var editPages =$("#pages-add-input").val(bookPages);
    //var newTitle =$("#date-add-input").val(bookDate);
    //var newTitle =$("#rating-add-input").val(bookRating);
    editBookArray =
    {
        newTitle: editTitle,
        newAuthor: editAuthor,
        newSynopsis: editSynopsis,
        newPages: editPages,
    };
    return true;
    }


    this.newBookArray.push(editBookArray);
    counter ++;
    $("#add-books-counter").text(counter);
    $("#add-books-modal form")[0].reset();

    this.addBooks(this.newBookArray);
    $("#add-books-counter").text("0");
    this.handleEventTrigger('objUpdate', window.bookShelf);
              //  location.reload();

return false;
};



DataTable.prototype._handleSearch = function (e)
{
  e.preventDefault();
  var myObj = {};
  myObj.title = $("#search-form").find("#title-search-input").val();
  //alert("I'm searching");
  myObj.author = $("#search-form").find("#author-search-input").val();

  this._makeTable(this.search(myObj));

};

DataTable.prototype._updateTable = function (e) {

  this._makeTable(e.detail);
};

DataTable.prototype._makeTable = function (books)
{
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  $('#books-table-head').html(this._createHead(new Book({})));
  $.each(books, function(index, book){
    $tbody.append(_self._createRow(book));
  });
};

DataTable.prototype._createHead = function (book)
{
  var tr = $('<tr>');
  for (var key in book) {
    var th = $('<th>').text(spacesToCamelCase(key));
    tr.append(th);
}
  var dTH = $('<th>').text('Delete Book');
  tr.append(dTH);
  //return tr;
  var eTH = $('<th>').text('Edit Book');
  tr.append(eTH);
  return tr;

};

DataTable.prototype._createRow = function (book)
{
  var tr = $('<tr>');
  var deleteTd = $('<td>');
  var editTd = $('<td>');
  //This created our delete column
  var deleteInput = $('<input class="deleteBox">').attr('type', 'checkbox');
  var editInput = $('<input class="editBox">').attr('type', 'checkbox');
  for(var key in book){
    var td = $('<td>');
    if (key === 'cover') {
      var img = $('<img>').addClass('tableImg').attr('src', book[key]);
      $(td).html(img);
    } else if(key === 'rating'){
      $(td).html(this._stars(book[key]));
    }else if(key === 'title'){
      $(td).text(book[key]);
   $(deleteInput).data('title',book[key]);
 } else {
      $(td).html(key === 'synopsis' ? book[key].substring(0,85) + "..." : book[key]);
    }
    tr.append(td);
  }
//${book.title}
  $(deleteTd).append(deleteInput);
  tr.append(deleteTd);
  $(editTd).append(editInput);
  tr.append(editTd);
  return tr;
};

DataTable.prototype._stars = function (rating)
{
  var $div = $('<div>');
  for(var i=0; i<5; i++) {
    var $star = $('<span>').addClass('fa fa-star');
    if(i<rating){ $star.addClass('checked'); }
    $div.append($star);
  }
  return $div;
};

DataTable.prototype._updateStorage = function ()
{
  if (window.localStorage.length > 0) {
    console.log('BOOKSHELF EXISTS SETTING VALUE');
    window.bookShelf = this.getStorage();
    this.handleEventTrigger('objUpdate',window.bookShelf);
  } else {
    console.log('BOOKSHELF DOES NOT EXIST ADDING BOOKS!');

    this.addBooks(bookify(bookList));
    this.handleEventTrigger('objUpdate',window.bookShelf);
    this.setStorage();
  }
};

//This is the document ready that will create a new instance of DataTable
//HINT: Each class||object will need a new instance to be initalized on document ready!
// document.addEventListener("DOMContentLoaded", function(e){
//  window.gLibrary = new Library();
$(function()
{
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
