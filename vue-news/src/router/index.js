import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
Vue.use(VueRouter);

export const router = new VueRouter({
    routes :[
        {   
            // path : url주소
            path:'/news'
            // component : url주소로 갔을때 표시될 컴포넌트
            , component : NewsView
        },
        {
            path:'/ask'
            , component : JobsView
        }   ,
        {
            path:'/jobs'
            , component : AskView
        }      
    ]
})
