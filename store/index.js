export const state = () => ({
  isMenuActive: false
})

export const mutations = {
  toggleMenuActive (state) {
    state.isMenuActive = !state.isMenuActive
  }
}
