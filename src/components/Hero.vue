<template>
  <section class="hero is-large" :style="backgroundStyle">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  font-size: 400%;
  color: white;
}
</style>

<script>
export default {
  name: 'Hero',
  props: ['title', 'subtitle', 'img'],
  computed: {
    hasImage () {
      return !!this.img
    },
    gradient () {
      const color = 'rgba(70, 130, 180, 0.5)'
      return `linear-gradient(${color}, ${color})`
    },
    backgroundStyle () {
      if (this.hasImage) {
        return {
          backgroundRepeat: 'no-repeat',
          backgroundImage: `${this.gradient}, url("${this.img}")`,
          backgroundSize: 'cover'
        }
      } else {
        return {
        }
      }
    }
  }
}
</script>
