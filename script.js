function openCreateAccount() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("createAccountPage").style.display = "block";
}

async function createAccount() {
  let username = document.getElementById("createUsername").value;
  let password = document.getElementById("createPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (username === "" || password === "" || confirmPassword === "") {
    document.getElementById("createMessage").innerHTML = "Please fill all fields";
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById("createMessage").innerHTML = "Passwords do not match";
    return;
  }

  const response = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  const data = await response.json();
  alert(data.message);
  document.getElementById("createAccountPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

async function loginUser() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  const data = await response.json();

  if (data.success) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("userDetailsPage").style.display = "block";
  } else {
    document.getElementById("loginMessage").innerHTML = data.message;
  }
}

function saveData() {
  alert("User data saved successfully ✔");
}
