<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <h1 class="navbar-item">Robotics PG</strong></h1>

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
        }
      ],

      // The dropdown menu
      menuActive: false
    }
  }
}
</script>
