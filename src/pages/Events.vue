<template>
  <div class="content">
    <Hero title="Events" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>

    <div class="text">

      <div v-if="isLoading" class="sk-cube-grid spinner">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>

      <div class="events">
        <Event class="event-item" v-for="event in events"
          :key="event.id"
          :title="event.name.text"
          :description="event.description.text"
          :start="event.start.local"
          :url="event.url" />
        </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  padding: 20px;
  min-height: 60vh;
}

.events {
  display: flex;
  flex-wrap: wrap;
}

.event-item {
  margin: 2em;
}

.spinner {
  margin: auto;
  height: 50px;
  width: 50px;
}

.spinner > div {
  background-color: #4682B4; }

</style>

<script>
import Hero from '../components/Hero'
import Event from '../components/Event'

export default {
  name: 'Events',
  components: {
    Hero,
    Event
  },
  mounted () {
    this.getEvents()
  },
  data () {
    return {
      events: [],
      isLoading: true
    }
  },
  computed: {
    /**
     * This is a anonymous token, so can only perform GET
     * requests with it
     */
    accessToken () {
      return 'XQZLMASWKON27RQ65VYB'
    },
    apiEndpoint () {
      return 'https://www.eventbriteapi.com/v3/'
    }
  },
  methods: {
    getEvents () {
      // The organiser id
      const orgId = '15850406575'
      const url = `${this.apiEndpoint}events/search/?organizer.id=${orgId}&token=${this.accessToken}`

      fetch(url).then((res) => {
        return res.json()
      }).then((json) => {
        this.$set(this, 'events', json.events)
        this.$set(this, 'isLoading', false)
      })
    }
  }
}
</script>
