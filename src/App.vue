<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/events">Events</router-link>
  </div>
  <router-view/>
  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/845322208&color=%23040404&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-434371931" title="kouroshmaleki" target="_blank" style="color: #cccccc; text-decoration: none;">kouroshmaleki</a> · <a href="https://soundcloud.com/user-434371931/anti-racism-summer-set" title="summer set" target="_blank" style="color: #cccccc; text-decoration: none;">summer set</a></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color:  black;
}

#nav {
  padding: 10px;
}

#nav a {
   /* Green */
  border: none;
  color: darkred;
  padding: 20px 32px;
  text-align: center;
  text-decoration: aliceblue;

}

#nav a.router-link-exact-active {
  color: darkred;
}
</style>
