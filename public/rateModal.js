$(function () {
     
      $("#rateYo").rateYo({
     
        onSet: function (rating, rateYoInstance) {
           rating = Math.ceil(rating);
           $('#rating_input').val(rating);//setting up rating value to hidden field
           alert("Rating is set to: " + rating);
        }
      });
    });