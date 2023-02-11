const isAdmin = () => {
  const userName = document.getElementById("username")
  const password = document.getElementById("password")

  if (userName.value.lenght <= 4) {
    console.log("мало символов в логине");
    return
  }

  if (userName.value.lenght > 15) {
    console.log("много символов в логине");
    return
  }

  if (userName.value == "dmitry" && password.value == "qwerty") {
    window.open("СистемаДобавленияФильма/inSys.html")
    window.close()
  } else {
    console.log("неправильный логин или пароль");
  }
}