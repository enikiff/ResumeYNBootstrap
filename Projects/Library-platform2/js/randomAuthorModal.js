function RandomAuthorModal()
{
  Library.call(this); //resets context
    this.$container = $('#author-display-modal');
}

//Creates new library object
RandomAuthorModal.prototype = Object.create(Library.prototype);

RandomAuthorModal.prototype.init = function()

{
  this._bindEvents();
};

RandomAuthorModal.prototype._bindEvents = function (){

    $("#random-author-button").on("click", function(){
    var randomAuthorName = gRandomAuthorModal.getRandomAuthorName();
    $("#author-display-modal .modal-body ul").html("<li>" + randomAuthorName + "</li>");
    });
};
$(function()
{
  window.gRandomAuthorModal = new RandomAuthorModal();
  window.gRandomAuthorModal.init();
});
