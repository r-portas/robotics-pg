<template>
  <div class="content">
    <Hero title="Robotics Playground" img="/static/background.jpg"/>

    <div class="text">
      <p>
        Robotics Playground is building an inclusive and fun robotics and STEM community. Giving a way for everyone to explore and get exposed to robotics!
      </p>

      <p>
        If you want to find out more feel free to get in contact (<a href="mailto:admin@roboticspg.com" target="_top">mailto:admin@roboticspg.com</a>)! Or go like us on <a href="https://fb.me/RoboticsPG">Facebook</a>!
        Let us know the age range, availability and interest of the student who is unable to attend in order for us to run more of those sessions!
      </p>
      <p>
        For any STEM Educators out there who would like to find out more about what we do or want to partner up we are more than happy to have a chat!
      </p>
    </div>
    <div class="text-grid">
      <div v-for="item in messages" class="text-grid-item">
        {{ item.message }}
      </div>
    </div>
    <div class="text1">
      <p>
        Check out our events <router-link to="/events">here</router-link>.
      </p>
    </div>
  </div>
</template>

<style scoped>

.text {
  padding: 3%;
  padding-left: 15%;
  padding-right: 15%;
}

.text1 {
  
  padding-left: 15%;
  padding-right: 15%;
}

.text-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 3%;
  padding-top: 0;
  padding-left: 15%;
  padding-right: 15%;
}

.text-grid-item {
  transition: 0.3s;
  max-width: 300px;
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>

<script>
import Hero from '../components/Hero'

export default {
  name: 'Landing',
  components: {
    Hero
  },
  data () {
    return {
      messages: [
        { message: 'Running fun and engaging robotics and STEM activities to give those who are a bit unsure about robotics and STEM to have a go as well!' },
        { message: 'Hosting various educational workshops taught by specialists in the area that are suitable to people of all levels of ability and experience.' },
        { message: 'Public events and other engineering events such as hackathons and competitions.' }
      ]
    }
  }
}
</script>
