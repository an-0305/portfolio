<template>
  <header class="c-header">
    <h1 class="title">
      <a href="/">akari.life</a>
    </h1>
    <div @click="onClickNavi" class="navi">
      <span />
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    onClickNavi () {
      this.$store.commit('toggleMenuActive')
    }
  }
}
</script>
