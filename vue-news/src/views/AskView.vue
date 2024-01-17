<template>
  <div>
    <div v-for="item in asks">{{item.title}}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index'

export default {
  data(){
    return {
      asks:[]
    }
  },
  created(){
    let vm = this;
    fetchAskList()
      .then(response => vm.asks = response.data)
      .catch(function (error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>