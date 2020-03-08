<template>
  <header v-bind:class="{fixed: isMenuActive}" class="c-header">
    <h1 class="title">
      <a href="/">akari.life</a>
    </h1>
    <div @click="onClickNavi" v-bind:class="{active: isMenuActive}" class="navi">
      <span />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isMenuActive: state => state.isMenuActive
    })
  },
  methods: {
    onClickNavi () {
      this.$store.commit('toggleMenuActive')
    }
  }
}
</script>
