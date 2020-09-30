<template>
<<<<<<< HEAD
<div id="profile">
    <h1 style="font-size : 50px">Your profile</h1>

    <img src="../assets/profile.png" height="300px">
    <br>
    <button type="button">Wallet</button><br>
    <button type="button">Contacts</button><br>
    <button type="button">Events</button><br>
    <button type="button" onclick="window.location.href='/settings'">Settings</button><br>
    <button type="button">Logout</button><br>
    <h2 style="text-decoration: underline">Privacy Policy</h2>


</div>
=======
  <div id="profile">
    <h1 style="font-size: 50px">My User Profile</h1>
    <div id="innerProfile">
      <img id="profilePicture" src="../assets/anon.jpg" />
      <div id="profileInfo">
        <h2 class="innerInfo">Name</h2>
        <h2 class="innerInfo">City</h2>
        <h2 class="innerInfo">Events #</h2>
        <h2 class="innerInfo">Activity</h2>
      </div>
    </div>
    <br />
    <div id="profileLinks">
      <button class="pButton" type="button">Wallet</button>
      <button class="pButton" type="button">myEvents</button>
      <button class="pButton" type="button">Contacts</button>
      <button class="pButton" type="button">Settings</button>
      <button type="button">Logout</button><br />
      <h2 style="text-decoration: underline">Privacy Policy</h2>
    </div>
  </div>
>>>>>>> 7f022fb1eca2e6365a7532326d0fe6a0c9bda683
</template>

<style scoped>
button {
  width: 150px;
  height: 120px;
  padding: 50px 250px;
  margin: 5px;
  cursor: pointer;
  font-size: 45px;
}
button:hover {
  background-image: linear-gradient(to right, salmon, white);
}
#profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2%;
  max-height: 100%;
}
#innerProfile {
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(to right, salmon, rgba(255, 255, 255, 0));
  padding: 10px;
  border: none;
  border-radius: 10px 10px;
}
.innerInfo {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
#profilePicture {
  max-width: 30%;
  height: auto;
  border: none;
  border-radius: 10px 10px;
}

#profileLinks {
  padding-top: 6%;
  font-size: 2.5vh;
  justify-content: center;
  width: 100%;
  height: 70px;
}
.pButton {
  font-weight: bold;
  font-style: italic;
  font-size: 1vw;
  color: white;
  height: 100%;
  background-color: salmon;
  border-radius: 15px 100px;
  padding: 10px 17px;
  margin: 7px;
}
</style>
