export default {
  data () {
    return {
      transitonStatus: false
    }
  },
  mounted () {
    this.transitonStatus = true
  },
  destoryed () {
    this.transitonStatus = false
  }
}