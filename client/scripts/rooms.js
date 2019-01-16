//MVC Model
var Rooms = {
  add: function($room) {
    let dropDown = RoomsView.$select;
    $(dropDown).append($room)
  },
};