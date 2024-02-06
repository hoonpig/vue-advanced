
import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList,fetchAskList,fetchJobsList} from '../api/index'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        news:[],
        asks:[],
        jobs:[]
    },
    actions :{
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response =>{
                    context.commit('SET_NEWS',response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        FETCH_ASKS(context){
            fetchAskList()
                .then(response =>{
                    context.commit('SET_ASKS',response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(response =>{
                    context.commit('SET_JOBS',response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    , mutations :{
        SET_NEWS(state,news){
            state.news = news;
        },
        SET_ASKS(state,news){
            state.asks = news;
        },
        SET_JOBS(state,news){
            state.jobs = news;
        },
    }
  });