<template>
  <div id="profile">

    <h1 style="font-size: 50px">My Contacts</h1>

    <div id="innerProfile">
      <img id="profilePicture" src="../assets/profile.png" />
      <div id="profileInfo">
        <h2 class="innerInfo">Name</h2> 
        <h2 class="innerInfo">Email</h2>
        <h2 class="innerInfo">Zip code </h2>
      </div>
      <div id="profileText">
          <p class="person">g4lileo</p>
          <p class="person>">galileo@resyst.com</p>
          <p class="person">93004</p>
      </div>
    </div>

    <br>

    <div id="innerProfile">
      <img id="profilePicture" src="../assets/profile.png" />
      <div id="profileInfo">
        <h2 class="innerInfo">Name</h2> 
        <h2 class="innerInfo">Email</h2>
        <h2 class="innerInfo">Zip code </h2>
      </div>
      <div id="profileText">
          <p class="person">putin</p>
          <p class="person>">iamputin@russia.ru</p>
          <p class="person">101000</p>
          
      </div>
    </div>

    <br>

    <div id="innerProfile">
      <img id="profilePicture" src="../assets/profile.png" />
      <div id="profileInfo">
        <h2 class="innerInfo">Name</h2> 
        <h2 class="innerInfo">Email</h2>
        <h2 class="innerInfo">Zip code </h2>
      </div>
      <div id="profileText">
          <p class="person">perolof52</p>
          <p class="person>">perolof@gmail.com</p>
          <p class="person">06400</p>
          
      </div>
    </div>
    
  </div>
</template>

<style scoped>
button {
  width: 150px;
  height: 120px;
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
.profileText{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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