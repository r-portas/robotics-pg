<template>
  <div class="content">
    <Hero title="Upcoming Events" img="https://static.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"/>

    <div class="text">

      <Spinner v-if="isLoading" />

      <div class="events">
        <Event class="event-item" v-for="event in events"
          :key="event.id"
          :title="event.name.text"
          :description="event.description.text"
          :start="event.start.local"
          :image="event.logo.url"
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
</style>

<script>
import Hero from '../components/Hero'
import Event from '../components/Event'
import Spinner from '../components/Spinner'

export default {
  name: 'Events',
  components: {
    Hero,
    Event,
    Spinner
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
      const url = `${this.apiEndpoint}events/search/?organizer.id=${orgId}&token=${this.accessToken}&include_all_series_instances=true`

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
