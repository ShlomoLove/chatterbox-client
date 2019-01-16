var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $userName = $('div');
    $submitButton = $('submit');
    // $('.username').on('click', Friends.toggleStatus);

    $userName.on('click', function (event) {
      if (event.target.className.includes('username')) {
        let friendName = event.target.innerText;
        Friends.toggleStatus(friendName)
      }
    })
  },

  renderMessage: function(message) {
    let template = `
    <div class="chat">
      <div class="username ${_.escape(message.username)}">${_.escape(message.username)}</div>
      <div class ="text">${_.escape(message.text)}</div> 
    </div>
  `
  MessagesView.$chats.prepend(template); //prepends messages div
  
  Messages[message.username] === undefined ? (Messages[message.roomname] = [template.roomname]) : Messages[message.roomname].push(template.roomname)
  }                                       
};