<template>
  <div class="content">
    <Hero title="About" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>

    <div class="text">
      <p>The about page</p>
    </div>
  </div>
</template>

<style scoped>
.text {
  padding: 20px;
  min-height: 60vh;
}
</style>

<script>
import Hero from '../components/Hero'

export default {
  name: 'About',
  components: {
    Hero
  }
}
</script>
