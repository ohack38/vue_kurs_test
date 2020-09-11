<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/activities">Activities</router-link> |
      <router-link to="/places">Places</router-link> 

    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  display: flex;
  align-items: center;
  flex-direction: column;

}
.eventtype{
  justify-content: center;
  max-width: 40vw;
  border: 3px black solid;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;

}
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
