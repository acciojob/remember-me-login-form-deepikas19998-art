document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault(); // prevent form submission
  const username = document.getElementById("username").value;
  const remember = document.getElementById("checkbox").checked;

  alert(`Logged in as ${username}`);

  if (remember) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", document.getElementById("password").value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});

