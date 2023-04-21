<template>
  <div id="app">
    <div id="nav mb-4">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">
            <img src="@/assets/logo_globo-16.png" class="d-inline-block align-top" alt="Kitten">
            BBB 2024
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href=""><router-link class="link" to="/">Home</router-link></b-nav-item>
              <b-nav-item><router-link class="link" to="/admin">Admin</router-link></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  width: 27px;
}

.link {
  font-weight: bold;
  color: #fff;
}

.link.router-link-exact-active {
  color: #2c3e50;
}
</style>
