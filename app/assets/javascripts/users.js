$(function(){
  $.ajax({
    url: '/',
    dataType: "JSON",
    type: 'GET'
  })
  .done(function(data){
    // the data we get from the server is been stroe in the data variable
    // iterate over data whihc is an array
    data.forEach(function(user){
      // everytime we iterate `user` os a object,
      // that have user information as an obect

      // we then select the users-row, with jquery
      // and pass the function user.html(user)
      // and also we pass to the user.html function the user object
      // {
      //   id: 1,
      //   name: "Leanne Graham",
      //   username: "Bret",
      //   email: "Sincere@april.biz",
      //   address: {
      //     street: "Kulas Light",
      //     suite: "Apt. 556",
      //     city: "Gwenborough",
      //     zipcode: "92998-3874",
      //     geo: {
      //       lat: "-37.3159",
      //       lng: "81.1496"
      //     }
      //   },
      //     phone: "1-770-736-8031 x56442",
      //     website: "hildegard.org",
      //   company: {
      //     name: "Romaguera-Crona",
      //     catchPhrase: "Multi-layered client-server neural-net",
      //    bs: "harness real-time e-markets"
      //   }
      // }
      $(".users-row").append(userInfo.html(user))
    })
  })
});

var userInfo = {
  html: function(user){
    return `<div class="col-md-4 mb-5">
      <div class="card">
        <img class="card-img-top" src="http://placehold.it/600/92c952" alt="Card image cap" style="height: 280px; width: 100%; display: block;">
        <div class="card-block">
          <h4 class="card-title">${user.name}</h4>
          <p class="card-title"><strong>Email: </strong>${user.email}</p>
          <p class="card-text"><strong>Address: </strong>User Address</p>
          <p class="card-text"><strong>Phone: </strong>${user.phone}</p>
          <p class="card-text"><strong>Website: </strong>${user.website}</p>
          <a href="#" class="btn btn-primary">User Show</a>
        </div>
      </div>
    </div>`
  }
}


// $(document),on('ready', function(event) {
//   event.preventDefault();
// });
