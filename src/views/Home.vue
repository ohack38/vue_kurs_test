<template>
  <div class="home">
    <img class="logo" alt="Eventurous logo" src="../assets/Eventurous_Logo_600_150.png">
    <h1>Welcome</h1>
    <h1>Please log in</h1>
    <div class="form">
    <input type="text" name="username" v-model="input.username" placeholder="Användarnamn" /><br>
    <input type="password" name="password" v-model="input.password" placeholder="Lösenord" /><br>
    <button type="button">Log in</button><br>
    </div>

    <h2>Log in with QR code</h2>
    <img src="../assets/QR.png" alt="QRcode" width="250x"><br>

    <h2>Log in with social media</h2>
    
    <button type="button" class="smButton"><img src="../assets/fbLogo.png" alt="fblogo" width="50px"></button>
    <button type="button" class="smButton"><img src="../assets/instaLogo.png" alt="fblogo" width="50px"></button>
    <button type="button" class="smButton"><img src="../assets/twitterLogo.png" alt="fblogo" width="50px"></button>
    <button type="button" class="smButton"><img src="../assets/linkedinLogo.png" alt="fblogo" width="50px"></button>
  </div>
</template>

<script>
export default {
name: 'Home',
   data() {
    return {
      input: {
       username: "",
       password: "",
      }
    }
  }
}
</script>
<style scoped>
input[type=text]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid green;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid green;
    border-radius: 4px;
    box-sizing: border-box;
}
button{
    width: inherit;
    height: inherit;
    background-color: #424242;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-image: linear-gradient(to right, green, lightgreen);
}

.smButton{
  width: 100px;
  height: 100px;
  margin: 5px;
}
.smButton:hover{
background: white;
}

.form {
padding-top: 20px;

}
.logo {
padding-top: 100px;
}

</style>