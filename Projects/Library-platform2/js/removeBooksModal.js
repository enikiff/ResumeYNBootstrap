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

RemoveBooksModal.prototype._bindEvents = function (){

//remove by title, author
        $("#remove-book-button").on("click", function(){
            var removeTitle = $("#title-remove-input").val();
            gRemoveBooksModal.removeBookByTitle(removeTitle);
            var removeAuthor = $("#author-remove-input").val();
            gRemoveBooksModal.removeBookByAuthor(removeAuthor);
            $("#remove-books-modal form")[0].reset();
        });
};

$(function()
{
  window.gRemoveBooksModal = new RemoveBooksModal();
  window.gRemoveBooksModal.init();
});
