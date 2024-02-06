<template>
  <div>
    <div v-for="item in this.$store.state.asks">{{item.title}}</div>
  </div>
</template>

<script>

export default {
  data(){
    return {
    }
  },
  created(){
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>

<style>

</style>