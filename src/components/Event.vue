<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{title}}
      </p>

      <p class="subtitle">
        {{parseDate(start)}}
      </p>

      <div class="columns">
        <div v-if="image" class="column is-one-third">
          <img :src="image">
        </div>

        <p class="content column">
          {{description}}
        </p>
      </div>

    </div>
    <footer class="card-footer">
      <a :href="url" class="card-footer-item">Book</a>
    </footer>
  </div>
</template>

<style scoped>
.title {
  font-family: "Dosis", sans-serif;
}
</style>

<script>
import moment from 'moment'

export default {
  name: 'Event',
  props: ['title', 'start', 'description', 'url', 'image'],
  methods: {
    parseDate (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>
