function ShowAuthorsModal()
{
  Library.call(this); //resets context
  this.$container = $('#author-display-modal');
}

//Creates new library object
ShowAuthorsModal.prototype = Object.create(Library.prototype);

ShowAuthorsModal.prototype.init = function()
{
    this._bindEvents();
};

ShowAuthorsModal.prototype._bindEvents = function (){
  $("#show-authors-button").on("click", function(author){
    var showAuthorNames = gRandomAuthorModal.getAuthors();
    for (var i = 0; i < showAuthorNames.length; i++) {
        $("#author-display-modal .modal-body ul").append("<li>" + showAuthorNames[i].author + "</li>");
    }
  });
};

$(function()
{
  window.gShowAuthorsModal = new ShowAuthorsModal();
  window.gShowAuthorsModal.init();
});
