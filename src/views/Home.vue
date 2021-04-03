<template>
  <div class="home">
    <Title/>
    <Header/>
    <showcase/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Title from '@/components/Title.vue'
import Showcase from '../components/Showcase.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Title,
    Showcase

  }
}
</script>
