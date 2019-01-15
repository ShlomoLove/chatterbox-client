var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').on('click', Friends.toggleStatus);
  },

  renderMessage: function() {
    let template = `
    <div class="chat">
      <div class="username"> ${_.escape(message.username)}</div>
      <div>${_.escape(message.text)}</div>
    </div>
  `
  MessagesView.$chats.prepend(template);
  }
};

//_.escape() protects from scriptsourcing