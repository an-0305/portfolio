<template>
  <div>
    <Header />
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Menu from '~/components/menu.vue'

export default {
  components: {
    Header,
    Menu
  }
}

</script>
