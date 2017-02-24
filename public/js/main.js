// user/event -> buttonCard, formCard, card
$(document).ready(function(){
  var users;
  $('#startDemoBtn').click(function(){
    // $('html, body').animate({
    //    scrollTop: $('#userButtonCard').offset().top
    //  }, 1000);
  });

  $('#userButtonCard').on("click", userButtonCardFn);
  $('#createUserContinueBtn').on("click", createUserContinueBtn);

  // Handle window resizing
  $(window).resize(function() {
    console.log($(window).width());
  });
});

// =======================================================================================================

//called to render the form
function userButtonCardFn(){
  if(typeof(users) === "undefined"){ users = []; }

  $('#userButtonCard').remove();
  var userForm = `
  <div class="hidden card add-user-card col-md-2 col-md-offset-2" id="userFormCard">
    <img src="../images/user_icon_${users.length + 1}.png" alt="User 1" class="circle-image">
    <form action="">
      <input class="input-field" type="text" placeholder="User ${users.length + 1}" id="userNameField">
      <input class="input-field" type="text" placeholder="Location" id="userLocationField">
      <div class="button-pink" id="createUserBtn">Create</div>
    </form>
  </div>
  `
  $(`#userRow${users.length}`).append(userForm);
  $('#userFormCard').removeClass('hidden');
  $('#userFormCard').addClass('animated fadeInDown');
  $('#createUserBtn').on("click", createUserButton);
};

// =======================================================================================================

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

  var addEventCard = getEventButtonCard(users.length);

  $('#userFormCard').remove();
  $(`#userRow${users.length}`).append(newUser);
  $(`#userRow${users.length}`).append(addEventCard);

  $(`#newUser${users.length}`).removeClass('hidden');
  $(`#newUser${users.length}`).addClass('animated fadeInDown');

  $(`#eventButtonCard${users.length}`).addClass('animated fadeInDown');
  $(`#eventButtonCard${users.length}`).removeClass('hidden');
  $(`#eventButtonCard${users.length}`).on("click", addEventButton);

  // //store user that was created
  users.push({name: userName, location: userLocation});

  //create row for new user
  var newUserRow = `
      <div class = "row" id="userRow${users.length}">
      </div>
  `
  $('.create-user-card-holder').append(newUserRow);

  var userButtonCard = `
  <div class="hidden card add-user-card col-md-2 col-md-offset-2" id="userButtonCard">
    <div class="add-text">
      <span class="plus"> + </span> Add User
    </div>
  </div>
  `

  $(`#userRow${users.length}`).append(userButtonCard);
  $('#userButtonCard').removeClass('hidden');
  $('#userButtonCard').addClass('animated fadeInDown');
  $('#userButtonCard').on("click", userButtonCardFn);
};

// =======================================================================================================

function addEventButton(){
  var eventId = `#${this.id}`;
  var row = eventId.split('').pop();

  var eventCardForm = `
  <div class="hidden card add-event-card col-md-3" id="eventFormCard${row}">
    <div> poop </div>
    <div class="button-pink" id="createEventBtn${row}">Create</div>
  </div>
  `

  $(eventId).remove();
  $(`#userRow${row}`).append(eventCardForm);
  $(`#eventFormCard${row}`).removeClass('hidden');
  $(`#eventFormCard${row}`).addClass('animated fadeInDown');

  $(`#createEventBtn${row}`).on("click", createEventButton);
};

// =======================================================================================================

function createUserContinueBtn(){
  //inject recommendation page
  var recPage = `
  <div class="recommend-events-background">
    <h1 class='page-title'> Recommend Events </h1>

    <div class="row">
      <div class="button-group">
        <div class="button-pink"> Recommend </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a href="#">User 1</a></li>
          <li role="presentation"><a href="#">User 2</a></li>
          <li role="presentation"><a href="#">User 3</a></li>
        </ul>
      </div>
    </div>

    <div class="recommend-events-container">
      <!-- <UserCard location="London, ON"></UserCard> -->
      <div class="events-container">
        <!-- <EventCard eventLocation="London, ON" eventTitle="Some Event" eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." eventCategory="Business"></EventCard> -->
    </div>

    </div>
  </div>
  `
  $('body').append(recPage);
};

// =======================================================================================================

function createEventButton(){
  var buttonId = `#${this.id}`;
  console.log(buttonId);
  var row = buttonId.split('').pop();
  var eventCard = `
  <div class="hidden card add-event-card col-md-3" id="eventCard${row}">
    Some new Event
  </div>
  `

  $(`#eventFormCard${row}`).remove();
  $(`#userRow${row}`).append(eventCard);
  $(`#eventCard${row}`).removeClass('hidden');
  $(`#eventCard${row}`).addClass('animated fadeInDown');

  var addEventCard = getEventButtonCard(row);
  $(`#userRow${row}`).append(addEventCard);
  $(`#eventButtonCard${row}`).removeClass('hidden');
  $(`#eventButtonCard${row}`).addClass('animated fadeInDown');

  $(`#eventButtonCard${row}`).on("click", addEventButton);
};

function getEventButtonCard(row){
  var addEventCard = `
  <div class="hidden card add-event-card col-md-3" id="eventButtonCard${row}">
    <div class="add-text">
      <span class="plus"> + </span> Add Event
    </div>
  </div>
  `
  return addEventCard;
};
