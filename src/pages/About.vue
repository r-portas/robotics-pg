<template>
  <div class="content">
    <Hero title="About us" img="/static/background.jpg"/>

    <div class="text">
      <p>
        Robotics Playground is created and run by a team with a passion for both robotics and educating the next generation. We inspire young and new minds to delve into the world of robotics and STEM to realise their interests and potential. 
      </p>
      <p>
        Robotics Playground provides an accessible, inclusive and fun space to learn and explore robotics and all things STEM. We provide workshops in collaboration with industry professionals and educators, as well as providing a robotics playground to have fun exploring and playing with robots.
      </p>
      <p>
        We provide a diverse and inclusive learning environment where we invite people of any gender, learning ability or prior experience to come and learn/explore the world of robots and all things STEM.
      </p>
      <p>
        <strong>DIVERSITY - FUN - EDUCATIONAL - ROBOTICS/STEM</strong>
      </p>
      <p>
        Robotics Playground workshops are tailored towards STEM education. The workshops are aimed to provide for those who have no robotics or programming experience and just want to give it a go, to those who are wanting to expand their knowledge and learn more while having fun. Catered to both the novice robot builder to the more experienced and those who are completely new and want to find out more.
      </p>
    </div>
    <div class="heading">
      Our STEM education providers
    </div>
    <div class="image-grid">
      <div v-for="image in SEPimages" class="image-grid-item">
        <img :src="image">
      </div>
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

.image-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.image-grid-item {
  transition: 0.3s;
  max-width: 400px;
  height: auto;
  padding: 10px;
}

.image-grid-item:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.heading{
  padding: 3%;
  padding-left: 15%;
  padding-right: 15%;
  text-align: center;
  font-size: 200%;
  font-weight: normal;
}

</style>

<script>
import Hero from '../components/Hero'

export default {
  name: 'About',
  components: {
    Hero
  },
  data () {
    return {
      SEPimages: [
        '/static/logos/TigoRobotics.png',
        '/static/logos/micromelonlogoblack.png'
      ]
    }
  }
}
</script>
