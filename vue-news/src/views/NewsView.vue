<template>
  <div>
    <div v-for="news in newsArr">{{news.title}}</div>
  </div>
</template>

<script>
import {fetchNewsList} from '../api/index'

export default {
  data(){
    return {
      newsArr:[]
    }
  },
  created(){
    fetchNewsList()
      .then(response => this.newsArr = response.data)
      .catch(function (error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>