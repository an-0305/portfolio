<template>
  <div v-bind:class="{active: isMenuActive}" class="c-menu">
    <ul class="menu-list">
      <li class="menu-item">
        <a href="about">about</a>
      </li>
      <li class="menu-item">
        <a href="skill">skill</a>
      </li>
      <li class="menu-item">
        <a href="work">work</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isMenuActive: state => state.isMenuActive
    })
  }
}
</script>
