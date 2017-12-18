<template>
  <div class="content">
    <Hero title="Photos" img="/static/background.jpg"/>
    <div class="image-grid">
      <div v-for="image in images" class="image-grid-item">
        <img :src="image">
      </div>
    </div>
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
</style>

<script>
import Hero from '../components/Hero'

export default {
  name: 'Photos',
  components: {
    Hero
  },
  data () {
    return {
      images: [
        '/static/DomCamDSC_0602.jpg',
        '/static/DomCamDSC_0585.jpg',
        '/static/DomCamDSC_0637.jpg',
        '/static/firstWorkshopWithTigo_Aditya.jpg',
        '/static/DomCamDSC_0627.jpg',
        '/static/DomCamDSC_0577.jpg',
        '/static/DSC_0611.jpg',
        '/static/DSC_0640.jpg'
      ]
    }
  }
}
</script>
