<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <PageFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import PageFooter from './components/PageFooter'

export default {
  name: 'app',
  components: {
    Navbar,
    PageFooter
  }
}
</script>

<style>
</style>
