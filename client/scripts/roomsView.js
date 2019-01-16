//MVC View
var RoomsView = {  //

  $addRoom: $('#rooms .addRoomButton'),
  $go: $('#rooms .goButton'),
  $roomName: $('#rooms #roomName'),
  currentRoomName: 'lobby',
  $option: ('#rooms .option'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.renderRoom(RoomsView.currentRoomName);

    RoomsView.$addRoom.on('click', function (event) {
      let roomName = RoomsView.$roomName;
      RoomsView.renderRoom(roomName.val());
      roomName.val('')
    })

    RoomsView.$go.on('click', function (event) {
      RoomsView.currentRoomName = $('#option :selected')
      .text()
      .trim()

      MessagesView.$chats.empty(); 
      App.lastId = ''
      App.fetch();
    });

  },
  // initialize: function () {
  //   Parse.readAll(({results}) => {
  //     for (item of results) {
  //       if (item.roomname) {
  //         Rooms[item.roomname.trim().toLowerCase()] = item.roomname.trim();
  //       }
  //     }
  //     for (room in Rooms) {
  //       this.renderRoom(Rooms[room])
  //     }
  //   })
  //   $('select').change(RoomsView.filterRooms);

  // }, 

  renderRoom: function (room) {
    let $room = `<option class = 'option' value = ${room}>${room}</option>`;
    Rooms.add($room) 
  },

  // filterRooms: function (event) {
  //   let roomname = event.target.value;
  //   let allChats = document.querySelectorAll('.chat')

  //   if (roomname === 'All') {
  //     for (chat of allChats) {
  //       $(chat).show();
  //     }
  //   } else {
  //     for (chat of allChats) {
  //       if (chat.classList !== undefined) {
  //         if (chat.classList.contains(roomname)) {
  //           $(chat).show(); 
  //         } else {
  //           $(chat).hide(); 
  //         }
  //       }
  //     }
  //   }
  // }

  // initialize: function() {
  //   RoomsView.$select.on('change', Rooms.add);
  //   RoomsView.$button.on('click', Rooms.add);
  // },

  // renderRoom: function(roomName) {
  //   let template = `
  //     <option name=${roomName}>${roomName}</option>
  // `
  // RoomsView.$select.append(template); 
  // },

  // addRoom: function() {  //sends Server 
  //   RoomsView.renderRoom($('#message').val());  //bug: renders to chat
  //   let newMessage = {
  //     username: App.username,
  //     text: `new room called ${$('#message').val()} has been created`,
  //     roomname: $('#message').val()
  //   }

  //   Parse.create(newMessage, App.fetch);  //sends message to Server, gets info (messages) and renders
  // }

};
