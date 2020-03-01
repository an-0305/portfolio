<template>
  <div v-bind:class="{active: isMenuActive}" class="c-menu">
    <ul class="menu-list">
      <li class="menu-item">
        <a href="">about</a>
      </li>
      <li class="menu-item">
        <a href="">skills</a>
      </li>
      <li class="menu-item">
        <a href="">work</a>
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
