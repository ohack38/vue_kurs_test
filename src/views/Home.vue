<template>
  <div class="home">
    <img class="logo" alt="Eventurous logo" src="../assets/Eventurous_Logo_600_150.png">
    <h1>Welcome</h1>
    <h1>Please log in</h1>
    <div class="form">
    <input type="text" name="username" v-model="input.username" placeholder="Användarnamn" /><br>
    <input type="password" name="password" v-model="input.password" placeholder="Lösenord" /><br>
    <button type="button">Log in</button>
    </div>
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

.form {
padding-top: 20px;

}
.logo {
padding-top: 100px;
}

</style>