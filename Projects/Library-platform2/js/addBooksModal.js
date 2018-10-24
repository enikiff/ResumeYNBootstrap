function AddBooksModal()
    {
            Library.call(this); //resets context
            this.$container = $('#add-books-modal');
            this.arrayQueue = [];
    }

//Creates new library object
AddBooksModal.prototype = Object.create(Library.prototype);

AddBooksModal.prototype.init = function()
    {
            this._bindEvents();
    };

AddBooksModal.prototype._bindEvents = function ()
    {
        $("#cover-add-input").on('change', $.proxy(this._handleImageUpload, this));
        $("#add-books-modal").on("submit", $.proxy(this._handleAdd, this));
        $("#add-book-btn").on('click', $.proxy(this._addQueueBooks, this));
    };
            var counter=0;
AddBooksModal.prototype._handleAdd = function(e)
    {
           e.preventDefault();
            var getCover = $("#add-book-cover-image").attr("src");
            var getTitle = $("#title-add-input").val();
            var getAuthor = $("#author-add-input").val();
            var getSynopsis = $("#synopsis-add-input").val();
            var getPages = $("#pages-add-input").val();
            var getDate = $("#date-add-input").val();
            var getRating = $("#rating-add-input").val();

            var tempQueueBook =
              {
                  cover: getCover,
                  title: getTitle,
                  author: getAuthor,
                  synopsis: getSynopsis,
                  pages: getPages,
                  date: getDate,
                  rating: getRating,
              };
              this.arrayQueue.push(tempQueueBook);
              counter ++;
              $("#add-books-counter").text(counter);
              $("#add-books-modal form")[0].reset();

};

AddBooksModal.prototype._addQueueBooks = function ()
        {
            this.addBooks(this.arrayQueue);
            $("#add-books-counter").text("0");
          //  $("#add-book-cover-image").empty();
            this.handleEventTrigger('objUpdate', window.bookShelf);
            location.reload();

        };

//Use the function below to add cover art as a base64 encoded string
//https:www.developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
//If you get stuck reference the documents in the link above
AddBooksModal.prototype._handleImageUpload = function ()
    {
        var preview = document.querySelector('#add-book-cover-image');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.addEventListener("load", function ()
        {
          preview.src = reader.result;
        }, false);

        if (file)
        {
          return reader.readAsDataURL(file);
        }

    };


    $(function()
    {
      window.gAddBooksModal = new AddBooksModal();
      window.gAddBooksModal.init();
    });
