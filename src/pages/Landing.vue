<template>
  <div class="content">
    <Hero title="Landing" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>

    <div class="text">
      <p>A landing page for the Robotics PG</p>
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
  name: 'Landing',
  components: {
    Hero
  }
}
</script>
