<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{title}} - {{start}}
      </p>
    </header>
    <div class="card-content">
      {{description}}
    </div>
    <footer class="card-footer">
      <a :href="url" class="card-footer-item">Book</a>
    </footer>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Event',
  props: ['title', 'start', 'description', 'url']
}
</script>
