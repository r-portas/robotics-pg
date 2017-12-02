<template>
  <div class="content">
    <Hero title="Robotics Playground" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>

    <div class="text">
      <p>
        Robotics playground aims to provide a fun learning environment for students who are interested in robotics and all things STEM.
      </p>

      <p>
        We host various educational workshops suitable for all levels of ability.
      </p>

      <p>
        Check out our events <router-link to="/events">here</router-link>
      </p>

      <p>
        Let us know if you're interested in a workshop and want to find out more.
        Let us know the age range and availability of the student.
      </p>
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
