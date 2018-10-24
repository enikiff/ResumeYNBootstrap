    function RemoveBooksModal()
    {
      Library.call(this); //resets context
      this.$container = $('#remove-books-modal');
    }

//Creates new library object
    RemoveBooksModal.prototype = Object.create(Library.prototype);

    RemoveBooksModal.prototype.init = function()
    {
      this._bindEvents();
    };

    RemoveBooksModal.prototype._bindEvents = function() {
      $("#remove-books-modal").on("click", $.proxy(this._handleRemove, this));
      $("#remove-books-modal").on("click", $.proxy(this._handleUpdate, this));

    };

    RemoveBooksModal.prototype._handleRemove = function(){
    //  e.preventDefault();
      var removeTitle = $("#title-remove-input").val();
      gRemoveBooksModal.removeBookByTitle(removeTitle);
      var removeAuthor = $("#author-remove-input").val();
      gRemoveBooksModal.removeBookByAuthor(removeAuthor);
      // $("#remove-books-modal form")[0].reset();
      // this.handleEventTrigger('objUpdate', window.bookShelf);
    };

    RemoveBooksModal.prototype._handleUpdate = function (e) {
      $("#remove-books-modal form")[0].reset();
      this.handleEventTrigger('objUpdate', window.bookShelf);
      };



    $(function()
    {
      window.gRemoveBooksModal = new RemoveBooksModal();
      window.gRemoveBooksModal.init();
    });
