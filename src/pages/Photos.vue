<template>
  <div class="content">
    <Hero title="Photos" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>
    <div class="text">
      <div class="row">
        <div class="column">
          <img src="../assets/DomCamDSC_0602.png" style="width:100%" class="hover-shadow cursor">
        </div>
        <div class="column">
          <img src="../assets/DomCamDSC_0585.png" style="width:100%" class="hover-shadow cursor">
        </div>
        <div class="column">
          <img src="../assets/DomCamDSC_0637.png" style="width:100%" class="hover-shadow cursor">
        </div>
        <div class="column">
          <img src="../assets/firstWorkshopWithTigo_Aditya.png" style="width:100%" class="hover-shadow cursor">
        </div>
      </div>
      <div class="buffer"></div>
      <div class="row">
        <div class="column">
          <img src="../assets/DomCamDSC_0627.png" style="width:100%" class="hover-shadow cursor">
        </div>
        <div class="column">
          <img src="../assets/DomCamDSC_0577.png" style="width:100%" class="hover-shadow cursor">
        </div>
        <div class="column">
          <img src="../assets/DSC_0611.png" style="width:100%" class="hover-shadow cursor">
        </div>
        <div class="column">
          <img src="../assets/DSC_0640.png" style="width:100%" class="hover-shadow cursor">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  padding: 20px;
  min-height: 60vh;
}

* {
  box-sizing: border-box;
}

.row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 25%;
}

.cursor {
  cursor: pointer
}

img {
  margin-bottom: -4px;
}

img.hover-shadow {
  transition: 0.3s
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

.buffer {
  padding: 3%;
}
</style>

<script>
import Hero from '../components/Hero'

export default {
  name: 'Photos',
  components: {
    Hero
  }
}
</script>
