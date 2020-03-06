<template>
  <div>
    <Header />
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Menu from '~/components/menu.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    Menu,
    Footer
  }
}

</script>
