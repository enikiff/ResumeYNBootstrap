function AddBooksModal()
{
  Library.call(this); //resets context
  this.$container = $('#add-books-modal');
}

//Creates new library object
AddBooksModal.prototype = Object.create(Library.prototype);

AddBooksModal.prototype.init = function()
{
  this._bindEvents();
};

AddBooksModal.prototype._bindEvents = function (){
      var counter=0;
      var arrayQueue = [];

//find module, and get val from the form
        $("#add-books-modal").on("submit", function(e){
        e.preventDefault();

        var getTitle = $("#title-add-input").val();
        var getAuthor = $("#author-add-input").val();
        var getRating = $("#rating-add-input").val();
        var getPages = $("#pages-add-input").val();
        var getDate = $("#date-add-input").val();
        var getSynopsis = $("#synopsis-add-input").val();
        // var getCover = $("#cover-add-input").val();
        counter ++;

      var tempQueueBook = {
         title: getTitle,
         author: getAuthor,
         rating: getRating,
         pages: getPages,
         date: getDate,
         synopsis: getSynopsis
      };

       arrayQueue.push(tempQueueBook);
       // console.log(arrayQueue);
       $("#add-books-counter").text(counter);
       $("#add-books-modal form")[0].reset();

       $("#addBook").click(function(){
       gAddBooksModal.addBooks(arrayQueue);
       $("#add-books-counter").text("0");


       });
      });


};






//Use the function below to add cover art as a base64 encoded string
//https:www.developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
//If you get stuck reference the documents in the link above
AddBooksModal.prototype._handleImageUpload = function ()
{
  var preview = document.querySelector('#addBookCoverImage');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    return reader.readAsDataURL(file);
  }
};

$(function()
{
  window.gAddBooksModal = new AddBooksModal();
  window.gAddBooksModal.init();
});
