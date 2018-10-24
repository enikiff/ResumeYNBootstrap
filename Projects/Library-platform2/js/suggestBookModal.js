  function SuggestBooksModal()
  {
      Library.call(this); //resets context
      this.$container = $('#book-display-modal');
  }

//Creates new library object
  SuggestBooksModal.prototype = Object.create(Library.prototype);

  SuggestBooksModal.prototype.init = function()
  {
      this._bindEvents();
  };

  SuggestBooksModal.prototype._bindEvents = function ()
  {

  $("#random-book-button").on("click", $.proxy(this._suggestBookModal, this));
  $("#btnClodeSugBook").on("click", $.proxy(this._eraseSuggestModal, this));
  $("#book-display-modal .close").on("click", $.proxy(this._eraseSuggestModal, this));

  };

  SuggestBooksModal.prototype._suggestBookModal = function ()
  {
      var randomBook = gSuggestBooksModal.getRandomBook();
      var formElement = "#book-display-modal .modal-body .modal-sidebar";
      $("#suggestModalBook").text("Suggest Book to read: " + randomBook.title);

      $('#book-display-modal .book-cover').append($('<img>').attr("src",randomBook.cover));
      $(formElement).append("<p>Title: " + randomBook.title + "</p>");
      $(formElement).append("<p>Author: " + randomBook.author + "</p>");
      $(formElement).append("<p>Synopsis: " + randomBook.synopsis + "</p>");
      $(formElement).append("<p>Number of Pages: " + randomBook.numberOfPages + "</p>");
      $(formElement).append("<p>Date: " + randomBook.publishDate + "</p>");
      $(formElement).append("<p>Rating: " + randomBook.rating + "</p>");

  };
  //$("book-display-modal .modal-sidebar").append(DataTable.prototype._stars)
  SuggestBooksModal.prototype._eraseSuggestModal = function ()
  {
      $("#book-cover").empty();
      $("#modal-sidebar").empty();
  };

$(function()
  {
      window.gSuggestBooksModal = new SuggestBooksModal();
      window.gSuggestBooksModal.init();
  });
