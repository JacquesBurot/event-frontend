<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/create">Create</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkred;
  background-color:  black;
}
html{
  background : black;
}
hr{
  background-color : darkred;
  height : 1px;
  border : none;
}

#nav {
  padding: 10px;

}

#nav a {

   /* Green */
  text-decoration: none;
  border: none;
  color: darkred;
  padding: 20px 32px;
  text-align: center;
  text-underline-offset:7.2px;

}

#nav a:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

#nav a.router-link-exact-active {
  color: darkred;

}
a:after {
  content: "";
  position:absolute;
  background-color: white;

}
</style>
