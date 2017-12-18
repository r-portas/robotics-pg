<template>
  <div class="content">
    <Hero title="Robotics Playground" img="/static/background.jpg"/>

    <div class="text">
      <p>
        Robotics playground aims to provide a fun learning environment for students who are interested in robotics and all things STEM. Hosting various educational workshops suitable for all levels of ability.
      </p>

      <p>
        Check out our events <router-link to="/events">here</router-link>
      </p>

      <p>
        If you're unable to attend a workshop or just want to find out more feel free to get in contact (<a href="mailto:roboticspg@gmail.com" target="_top">RoboticsPG@gmail.com</a>)! Or go like us on <a href="https://fb.me/RoboticsPG">Facebook</a>!
        Let us know the age range, availability and workshop of interest of the student who is unable to attend in order for us to host more of those workshops.
      </p>
      <p>
        For any STEM Educators out there who would like to find out more about what we do or want to partner up we are more than happy to have a chat!
      </p>
    </div>
  </div>
</template>

<style scoped>
.text {
  padding: 3%;
  padding-left: 15%;
  padding-right: 15%;
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
