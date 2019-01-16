var FormView = {

  $form: $('form'),
  $message: $('#message'), 

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    let newMessage = $('#message').val();
    
    let message = {
      username: App.username, 
      text: newMessage,
      roomname: RoomsView.currentRoomName,
    }

    Parse.create(message, App.fetch())
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};