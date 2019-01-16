var App = {  //Application -- *gets invoked end of index.html after script loads

  $spinner: $('.spinner img'),
  lastId: '',
  username: 'anonymous',

  currentRoom: '',
  lastMsg: '',
  currentData: '',

  initialize: function() {  //Initializes App components
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    setInterval(App.fetch, 5000);  //*updates every 5 seconds

  },

  fetch: function(callback = () => {}) {
    Parse.readAll(({results}) => {   //{results} same as allTheData.results
      // examine the response from the server request:
      let messages = [];
      console.log(results)
      App.currentData = results;
      App.currentRoom = _.filter(results, function(message) {
        return message.roomname === RoomsView.currentRoomName
      });
      for (let i = 0; i < 10; i++) {
        let currentMsg = App.currentRoom[i];
        if (App.currentRoom.length === 0) {
          alert ("No Chats");
          break;
        } else if (!currentMsg) {
          break;
        } else if (App.lastId === currentMsg.objectId) {
          i = 10;
        } else {
          messages.push(currentMsg);   
        } 
      }
      for (let x = messages.length - 1; x >= 0; x--) {
        let message = messages[x];
        App.lastId = message.objectId;
        MessagesView.renderMessage(message);
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
