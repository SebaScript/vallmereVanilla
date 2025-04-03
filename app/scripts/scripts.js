function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username) {
    alert("Please enter a username");
    return;
  }

  if (!password) {
    alert("Please enter a password");
    return;
  }

  let user = JSON.parse(localStorage.getItem(username));

  if (!user) {
    alert("User not found");
    return;
  }

  if (user.password !== password) {
    alert("Incorrect password");
    return;
  }

  window.location.href = `user.html?username=${encodeURI(username)}`;
}

function registry() {
  try {
    let username = document.getElementById("reg-username").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;
    let reType = document.getElementById("retype-password").value;

    if (!username) {
      alert("Please enter a username");
      return;
    }
    if (!password) {
      alert("Please enter a password");
      return;
    }
    if (password !== reType) {
      alert("Passwords do not match");
      return;
    }

    if (localStorage.getItem(username)) {
      alert(`There is alredy an user with username: ${username}`);
      return;
    }

    let user = {
      email: email,
      username: username,
      password: password,
    };

    console.log(user);

    localStorage.setItem(username, JSON.stringify(user));

    window.location.href = `user.html?username=${encodeURI(username)}`;
  } catch (e) {
    alert("An error has occurred, please try again later.");
    console.log("An error has occurred, please try again later.");
    return;
  }
}
