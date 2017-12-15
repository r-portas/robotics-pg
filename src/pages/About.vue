<template>
  <div class="content">
    <Hero title="About us" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>

    <div class="text">
      <p>
        Robotics Playground provides an accessible, inclusive and fun space to learn and explore robotics and all things Science, Technology, Engineering and Maths (STEM). We host workshops led by industry professionals and educators, as well as providing a robotics playground to have fun exploring and playing with robotics.
      </p>
      <p>
        We provide a Diverse/inclusive learning environment where we invite both boys and girls of any learning ability or level of knowledge to come and learn/explore the world of robots and all things STEM.
      </p>
      <p>
        At the same time providing the opportunity for industry professionals and educators in the field of robotics to host workshops in an equipped space and share their knowledge to the next generation. 
      </p>
      <p>
        <strong>DIVERSITY - FUN - EDUCATIONAL - ROBOTICS/STEM</strong>
      </p>
      <p>
        The robotics playground workshops are tailored for STEM education. The workshops are aimed to provide for those who have no robotics or programming experience and just want to give it a go, to those who are wanting to expand their knowledge and learn more while having fun. Catered to both the novice robot builder to the more experienced and those who are completely new and want to find out more.
      </p>
      <p>
        Robotics Playground is crated and run by a team with a passion for both robotics and educating/inspiring the next generation. A love for robotics and a passion for helping young people realise their potential and interests in all things robotics. Inspiring young/new minds in the world of robotics. 
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
  name: 'About',
  components: {
    Hero
  }
}
</script>
