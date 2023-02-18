async function isAdmin() {
  event.preventDefault()

  try {

    const response = await axios.post(`${url}/login/admin`, {
    login: userName.value,
    password: password.value,
    })
    console.log(response.data.message.success)

    const Bool = response.data.message.success

    if (userName.value.lenght <= 4) {
      console.log("мало символов в логине");
      return
    }
  
    if (userName.value.lenght > 15) {
      console.log("много символов в логине");
      return
    }
  
    if (Bool === true) {
      window.open("СистемаДобавленияФильма/inSys.html")
      window.close()
    } else {
      console.log("неправильный логин или пароль");
    }

  } 
  catch (error) {
    console.log(error);
  }
}

const userName = document.getElementById("username")
const password = document.getElementById("password")


const url = `http://192.168.1.21:5000` 
 