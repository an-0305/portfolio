<template>
  <div v-bind:class="{active: isMenuActive}" class="c-menu">
    <ul class="menu-list">
      <li @click="onClickNavi" class="menu-item">
        <nuxt-link to="about">
          about
        </nuxt-link>
      </li>
      <li @click="onClickNavi" class="menu-item">
        <nuxt-link to="skill">
          skill
        </nuxt-link>
      </li>
      <li @click="onClickNavi" class="menu-item">
        <nuxt-link to="work">
          work
        </nuxt-link>
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
  },
  methods: {
    onClickNavi () {
      this.$store.commit('toggleMenuActive')
    }
  }
}
</script>
