<template>
  <div id="profile">
    <div v-if='logged'>
        <h1 style="font-size: 50px">My User Profile</h1>
        <div id="innerProfile">
          <img id="profilePicture" src="../assets/anon.jpg" />
          <div id="profileInfo">
            <h2 class="innerInfo">Username: {{this.user.username}}</h2> 
            <h2 class="innerInfo">Email: {{this.user.email}}</h2>
            <h2 class="innerInfo">zip code: {{this.user.zip}}</h2>
            
          </div>
          
        </div>
        <br />
        <div id="profileLinks">
          <button class="pButton" type="button" onclick="window.location.href='/wallet'">Wallet</button>
          <button class="pButton" type="button" onclick="window.location.href='/myevents'">myEvents</button>
          <button class="pButton" type="button" onclick="window.location.href='/contacts'">Contacts</button>
          <button class="pButton" type="button" onclick="window.location.href='/settings'">Settings</button>
          <button class="pButton" type="button" @click="logout">Logout</button><br />
          <h2 style="text-decoration: underline">Privacy Policy</h2>
        </div>
    </div>
    <div v-if='!logged'>
      <button class="pButton" onclick="window.location.href='/'">Log in</button>
    </div>
    
  </div>

</template>

<script>
export default {
  name: 'ProfileView',
  data(){
    return {
      user:[],
      logged:false
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('logged')
      this.logged = false
    }
  },
  mounted(){
      if(localStorage.getItem('logged')){
        this.user = JSON.parse(localStorage.getItem('logged'))
        this.logged = true
      }
    },
}
</script>


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
