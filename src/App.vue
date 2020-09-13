<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/events">Events</router-link>|
      <router-link to="/activities">Activities</router-link>|
      <router-link to="/places">Places</router-link>|
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kufam&display=swap");

body {
  margin: 0;
  overflow-x:hidden;
  background-image: url("./assets/Background_Box_mosaiq_1920_1080.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-x:hidden;
}

.hello {
  display: flex;
  flex-direction: row;
}
.home {
}
.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

.eventtype {
  max-width: 70vw;
  border: 3px black solid;
  background-color: lightcyan;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
}

.timer {
  font-size: 1rem;
}
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  font-family: "Kufam", sans-serif;
  color: #2c3e50;
  left: 0px;
}

#nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 10px;
  font-size: 2.5vh;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
