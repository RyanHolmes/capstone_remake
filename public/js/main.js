$(document).ready(function(){
  var users;
  init();
  $('#startDemoBtn').click(function(){
    // $('html, body').animate({
    //    scrollTop: $('#addUserBtn').offset().top
    //  }, 1000);
  });

  $('#addUserBtn').on("click", addUserButton);

  // Handle window resizing
  $(window).resize(function() {
    console.log($(window).width());
  });
});

function init(){

};

//called to render the form
function addUserButton(){
  if(typeof(users) === "undefined"){ users = []; }

  $('#addUserBtn').remove();
  var userForm = `
  <div class="hidden card add-user-card col-md-2 col-md-offset-2" id="fillUserCard">
    <img src="../images/user_icon_${users.length + 1}.png" alt="User 1" class="circle-image">
    <form action="">
      <input class="input-field" type="text" placeholder="User ${users.length + 1}" id="userNameField">
      <input class="input-field" type="text" placeholder="Location" id="userLocationField">
      <div class="button-pink" id="createUserBtn">Create</div>
    </form>
  </div>
  `
  $(`#userRow${users.length}`).append(userForm);
  $('#fillUserCard').removeClass('hidden');
  $('#fillUserCard').addClass('animated fadeInDown');
  $('#createUserBtn').on("click", createUserButton);
};

//called to create a user
function createUserButton(){
  var userName = $('#userNameField').val();
  var userLocation = $('#userLocationField').val();
  var newUser = `
  <div class="hidden card user-card col-md-2 col-md-offset-2" id="newUser${users.length}">
    <img src="../images/user_icon_${users.length + 1}.png" alt="${userName}" class="circle-image"/>
    <hr class="horizontal-line"/>
    <div> ${userName} </div>
    <div> ${userLocation} </div>
  </div>
  `;

  var addEventCard = `
  <div class="hidden card add-event-card col-md-3" id="addEventBtn${users.length}">
    <div class="add-text">
      <span class="plus"> + </span> Add Event
    </div>
  </div>
  `

  $('#fillUserCard').remove();
  $(`#userRow${users.length}`).append(newUser);
  $(`#userRow${users.length}`).append(addEventCard);

  $(`#newUser${users.length}`).removeClass('hidden');
  $(`#addEventBtn${users.length}`).removeClass('hidden');

  $(`#newUser${users.length}`).addClass('animated fadeInDown');
  $(`#addEventBtn${users.length}`).addClass('animated fadeInDown');

  $(`#addEventBtn${users.length}`).on("click", addEventButton);

  // //store user that was created
  users.push({name: userName, location: userLocation});

  //create row for new user
  var newUserRow = `
      <div class = "row" id="userRow${users.length}">
      </div>
  `
  $('.card-holder').append(newUserRow);
  var addUserCard = `
  <div class="hidden card add-user-card col-md-2 col-md-offset-2" id="addUserBtn">
    <div class="add-text">
      <span class="plus"> + </span> Add User
    </div>
  </div>
  `

  $(`#userRow${users.length}`).append(addUserCard);
  $('#addUserBtn').removeClass('hidden');
  $('#addUserBtn').addClass('animated fadeInDown');
  $('#addUserBtn').on("click", addUserButton);
};

function addEventButton(){
  var eventId = `#${this.id}`;
  var row = eventId.split('').pop();
  var eventCardForm = `
  <div class="hidden card add-event-card col-md-3" id="eventForm${users.length}">
    poop
  </div>
  `
  $(eventId).remove();
  $(`#userRow${row}`).append(eventCardForm);
  $(`#eventForm${users.length}`).removeClass('hidden');
  $(`#eventForm${users.length}`).addClass('animated fadeInDown');
  //create new event form, animate in
};
