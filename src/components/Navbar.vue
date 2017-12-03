<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <router-link to="/" active-class="" class="navbar-item main">Robotics PlayGround</router-link>

      <div class="navbar-burger burger" @click="toggleMenu" :class="{ 'is-active': menuActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-menu is-primary" :class="{ 'is-active': menuActive }">
        <router-link v-for="link in links" :key="link.title" :to="link.url" exact class="navbar-item">
          {{link.title}}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.main {
  font-weight: bold;
  font-family: "Dosis", sans-serif;
  font-size: 200%;
}

.navbar-item {
  font-weight: bold;
}
</style>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleMenu () {
      this.menuActive = !this.menuActive
    }
  },
  data () {
    return {
      links: [
        {
          url: '/',
          title: 'Home'
        },
        {
          url: '/about',
          title: 'About'
        },
        {
          url: '/events',
          title: 'Events'
        }
      ],

      // The dropdown menu
      menuActive: false
    }
  }
}
</script>
