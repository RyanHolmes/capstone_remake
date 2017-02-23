$(document).ready(function(){
  var users;
  init();
  // Events handlers
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

function addUserButton(){
  users = [];
  $('#addUserBtn').remove();
  var userForm = `
  <div class="hidden card add-user-card col-md-2 col-md-offset-2" id="fillUserCard">
    <img src="../images/user_icon_1.png" alt="User 1" class="circle-image">
    <form action="">
      <input type="text" placeholder="User 1" id="userNameField">
      <input type="text" placeholder="Location" id="userLocationField">
      <div class="button-pink" id="createUserBtn">Create</div>
    </form>
  </div>
  `
  $(`#userRow${users.length}`).append(userForm);
  $('#fillUserCard').removeClass('hidden');
  $('#fillUserCard').addClass('animated fadeInDown');
  $('#createUserBtn').on("click", createUserButton);
};

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

  $('#fillUserCard').remove();
  $(`#userRow${users.length}`).html(newUser);
  $(`#newUser${users.length}`).removeClass('hidden');
  $(`#newUser${users.length}`).addClass('animated fadeInDown');

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
