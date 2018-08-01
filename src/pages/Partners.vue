<template>
  <div class="content">
    <Hero title="Partners" img="/static/background.jpg"/>
    <div class="heading">
      Our STEM education providers
    </div>
    <div class="image-grid">
      <div v-for="image in SEPimages" class="image-grid-item">
        <img :src="image">
      </div>
    </div>
<!--    <div class="heading">
      Our Industry partners
    </div>
        <div class="image-grid">
      <div v-for="image in images" class="image-grid-item">
        <img :src="image">
      </div>
    </div> -->
  </div>
</template>

<style scoped>

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
  name: 'Partners',
  components: {
    Hero
  },
  data () {
    return {
      SEPimages: [
        '/static/logos/TigoRobotics.png',
        '/static/logos/micromelonlogoblack.png'
      ],
      images: [
        '/static/DomCamDSC_0602.jpg',
        '/static/DomCamDSC_0585.jpg',
        '/static/DomCamDSC_0637.jpg'
      ]
    }
  }
}
</script>